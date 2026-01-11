from fastapi import FastAPI
from app.api import auth
from app.api.endpoints import tasks
from app.db.database import engine, Base

# Create tables via Alembic or manual script
# Base.metadata.create_all(bind=engine)

app = FastAPI(title="Todo List API")

app.include_router(auth.router, tags=["Authentication"])
app.include_router(tasks.router, prefix="/tasks", tags=["Tasks"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Todo List API. Visit /docs for Swagger UI."}
