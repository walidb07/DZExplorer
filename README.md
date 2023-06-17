# DZExplorer

How to install:
  1) Clone repository.
  2) Open CMD in repository and run command `npm run dev` to start the frontend server.
  3) Install database and run backend server. (explained below)
  4) Access localhost:5173.

How to install database and run backend server:
  1) Install MySQL if not installed before.
  2) Create a new MySQL connection if not done before.
  3) Change the password in DZExplorer/DZExplorer_Backend/e_tourisme/settings.py line 102 to your MySQL connection password.
  4) Create a new schema called 'e_tourisme' in MySQL.
  5) Open CMD in subfolder DZExplorer/DZExplorer_Backend.
  6) Run command` python manage.py makemigrations`.
  7) Run command `python manage.py migrate`.
  8) Create superuser to access Django admin panel using command `python manage.py createsuperuser`.
  9) Run backend server by using command `python manage.py runserver`. 
