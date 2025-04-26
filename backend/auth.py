from passlib.context import CryptContext
import base64

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
     return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
     return pwd_context.verify(plain_password, hashed_password)

def create_token(username: str):
     return base64.b64encode(username.encode()).decode()  # turns "hello" into "aGVsbG8="

def verify_token(token: str):
     try:
          return base64.b64decode(token.encode()).decode()
     except:
          return None
