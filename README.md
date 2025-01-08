# Node Canvas & Sharp In Docker Container

An example project that creates an image using the `sharp` and `node-canvas` packages in a Docker container.

## Table of Contents

- [About](#about)
- [How To Use](#how-to-use)

## About

This project was created to demonstrate how to use the `sharp` and `node-canvas` packages in a Docker container.

## Dockerfile

The `Dockerfile` is used to build the Docker image. It includes all the necessary package to run the `sharp` and `node-canvas` packages!

## How To Use

1. Clone the repository:

```bash
git clone https://github.com/georgelopez7/node-canavs-sharp-docker-project.git
```

2. Navigate to the project directory and install the dependencies:

```bash
cd node-canavs-sharp-docker-project
npm install
```

3. Test / run the project **locally** _(this will create an image in the `output` folder)_:

```bash
npm run dev
```

4. Build the Docker image:

```bash
docker build -t node-sharp-canvas-image .
```

5. Run the Docker image:

```bash
docker run -d --name node-sharp-canvas-container node-sharp-canvas-image
```

6. Once the Docker container is running, you can see the image has been created in the `output` folder. To see this run the following command:

```bash
docker exec <docker-container-id> ls /app/src/output
```
