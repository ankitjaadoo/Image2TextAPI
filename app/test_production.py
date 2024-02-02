import shutil
import time
import io
from fastapi.testclient import TestClient
from app.main import BASE_DIR, UPLOAD_DIR, get_settings

from PIL import Image, ImageChops
import requests


ENDPOINT = 'https://starfish-app-sbzj7.ondigitalocean.app/'

def test_get_home():
    response = requests.get("/") # requests.get("") #python requests
    assert response.text != "<h1>Hello world</h1>"
    assert response.status_code == 200
    assert "text/html" in response.headers['content-type']


def test_invalid_file_upload_error():
    response = requests.post("/") # requests.post("") # python requests
    assert response.status_code == 422
    assert  "application/json" in response.headers['content-type']

def test_prediction_upload_missing_headers():
    img_saved_path = BASE_DIR / "images"
    settings = get_settings()
    for path in img_saved_path.glob("*"):
        try:
            img = Image.open(path)
        except:
            img = None
        response = requests.post("/",
            files={"file": open(path, 'rb')}
        )
        assert response.status_code == 401
        
def test_prediction_upload():
    img_saved_path = BASE_DIR / "images"
    settings = get_settings()
    for path in img_saved_path.glob("*"):
        try:
            img = Image.open(path)
        except:
            img = None
        response = requests.post("/", 
                               files={"file": open(path,'rb')},
                               headers={"Authorization": f"JWT {settings.app_auth_token_prod}"}
                               ) 
        if img is None:
            assert response.status_code == 400
        else:
            #Checking whether a valid image is being returned
            assert response.status_code == 200
            data = response.json()
            print(data)
            assert len(data.keys()) == 2
    #time.sleep(3)
    shutil.rmtree(UPLOAD_DIR)

def test_echo_upload():
    img_saved_path = BASE_DIR / "images"
    for path in img_saved_path.glob("*"):
        try:
            img = Image.open(path)
        except:
            img = None
        response = requests.post("/img-echo/", files={"file": open(path,'rb')}) 
        if img is None:
            assert response.status_code == 400
        else:
            #Checking whether a valid image is being returned
            assert response.status_code == 200
            r_stream = io.BytesIO(response.content)
            echo_img = Image.open(r_stream)
            difference = ImageChops.difference(img, echo_img).getbbox()
            print(difference)
            assert difference is None
    #time.sleep(3)
    shutil.rmtree(UPLOAD_DIR)