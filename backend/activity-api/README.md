# Activity api for backend of project Proxy Advisor MVP
This folder is for frontend, that it is a part of microservices with the whole project repository.
and have been generated with .

## Technologies stack
<ul>
    <li>PHP 8.2</li>
    <li>Symfony 7</li>
    <li>API Platform 3.3</li>
</ul>

## Getting started with local developments
### Setup
To launch project inside docker, please follow this steps :
<ul>
  <li>Open the root folder of project after cloning.</li>
  <li>Think to install docker-sync from the official website.</li>
  <li>
    Go to folder backend/activity-api/ops/ssl and generate new ssl key using this command :
    <code>openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")</code>
  </li>
  <li>Start docker-sync after installation : <code>docker-sync start</code></li>
  <li>
    Then, build images and docker stack by typing this command : 
    <code>docker compose -f docker-compose.yaml up --build --force-recreate --remove-orphans</code>
  </li>
</ul>

### Local developments
During development times you can execute commands as follows :
<ul>
  <li>Always think to clean docker-sync by using : <code>docker-sync clean</code></li>
  <li>Start docker-sync : <code>docker-sync start</code></li>
  <li>
    Execute the command to launch project stack by using : <code>docker compose up</code>
  </li>
  <li>
    If you think that there is a change on docker image, please execute : 
    <code>docker compose -f docker-compose.yaml up --build --force-recreate --remove-orphans</code> 
    This will refresh the rendered api backend
  </li>
  <li>
    Navigate to `https://localhost:8081/`. The application will automatically reload if you change any of the source files.
  </li>
  <li>Execute the command to stop project stack by using : <code>docker compose down && docker-sync clean</code></li>
</ul>

## Licence
This project is under [MOENN TECHNOLOGIES](https://moenn-technologies.com) licence.
