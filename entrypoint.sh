#!/bin/bash

RUN_PORT=${POST:-8000}
/workspaces/Image2TextAPI/bin/gunicorn --worker-tmp-dir /dev/shm -k uvicorn.workers.UvicornWorker app.main:app --bind "0.0.0.0:${RUN_PORT}"