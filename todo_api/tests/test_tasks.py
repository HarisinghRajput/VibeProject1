def test_create_task(client):
    # Register first
    client.post(
        "/register",
        json={"email": "test@example.com", "password": "password123"},
    )
    # Login first
    login_res = client.post(
        "/token",
        data={"username": "test@example.com", "password": "password123"},
    )
    token = login_res.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    response = client.post(
        "/tasks/",
        json={"title": "Test Task", "description": "Testing code"},
        headers=headers,
    )
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "Test Task"
    assert data["owner_id"] is not None

def test_read_tasks(client):
    email = "test2@example.com"
    client.post(
        "/register",
        json={"email": email, "password": "password123"},
    )
    # Login
    login_res = client.post(
        "/token",
        data={"username": email, "password": "password123"},
    )
    token = login_res.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Create a task first so we can read it
    client.post(
        "/tasks/",
        json={"title": "Test Task 2", "description": "Testing reading"},
        headers=headers,
    )

    response = client.get("/tasks/", headers=headers)
    assert response.status_code == 200
    data = response.json()
    assert len(data) > 0
    assert data[0]["title"] == "Test Task 2"
