# try-docker-node

基于 Docker Node.js 镜像的一个简单 Web 应用示例


## 构建镜像

```sh
docker build -t rzning/try-docker-node .
```

## 查看镜像

```sh
docker image ls
```

## 创建容器并启用

```sh
docker run --name myhomepage -p 80:8080 -d rzning/try-docker-node
```

- `--name` 为容器指定一个名称
- `-p 80:8080` 将容器的 8080 端口映射到主机的 80 端口
- `-d` , `--detach` 在后台运行并返回容器 ID

## 查看运行的容器

```sh
docker ps
# or
docker container ls
```