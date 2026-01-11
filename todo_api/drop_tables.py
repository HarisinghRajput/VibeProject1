import sys
import os
sys.path.append(os.getcwd())

from app.db.database import engine, Base
from app.models import models # Ensure models are loaded

print("Dropping all tables...")
Base.metadata.drop_all(bind=engine)
print("All tables dropped successfully.")
