# Frontend Hub UI of project Proxy Advisor MVP
This folder is for frontend microservices, that it is a part of microservices with the whole project repository.
and have been generated with .

## Technologies stack
<ul>
  <li>Angular 17</li>
  <li>[Angular CLI](https://github.com/angular/angular-cli) version 17.2.2</li>
</ul>

## Getting started with local developments
### Setup
To launch project inside docker, please follow this steps :
<ul>
  <li>Open the root folder of project after cloning.</li>
  <li>Think to install docker-sync from the official website.</li>
  <li>
    Go to folder frontend/front-hub-ui/ops/ssl and generate new ssl key using this command :
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
    This will refresh the rendered frontend
  </li>
  <li>
    Navigate to `http://localhost:4220/`. The application will automatically reload if you change any of the source files.
  </li>
  <li>Execute the command to stop project stack by using : <code>docker compose down && docker-sync clean</code></li>
</ul>

## Run development server using Angular CLI (Not recommended)
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

[//]: # ()
[//]: # (## Running unit tests)

[//]: # ()
[//]: # (Run `ng test` to execute the unit tests via [Karma]&#40;https://karma-runner.github.io&#41;.)

[//]: # ()
[//]: # (## Running end-to-end tests)

[//]: # ()
[//]: # (Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.)

[//]: # ()
[//]: # (## Further help)

[//]: # ()
[//]: # (To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference]&#40;https://angular.io/cli&#41; page.)

## Licence
This project is under [MOENN TECHNOLOGIES](https://moenn-technologies.com) licence.
