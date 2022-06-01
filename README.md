# Welcome to amazing-login-app!

**This projectwas was made with:**

1. Laravel 8 (php 8 required)
2. React


To run this project locally just clone it, and run:


    composer install

then install npm packages needed for the frontend:


    npm i
Copy *.env.example* file and named it as *.env*

there you have to set the credentials for connect to your local db:

    DB_CONNECTION=mysql  
    DB_HOST=127.0.0.1  
    DB_PORT=3306  
    DB_DATABASE=tgs_test_soa  
    DB_USERNAME=root  
    DB_PASSWORD=
Also If you want to make works the "forgot password" section, then you have to configure that in the *.env* file too:

    MAIL_MAILER=smtp  
    MAIL_HOST=mailhog  
    MAIL_PORT=1025  
    MAIL_USERNAME=null  
    MAIL_PASSWORD=null  
    MAIL_ENCRYPTION=null  
    MAIL_FROM_ADDRESS="hello@example.com"  
    MAIL_FROM_NAME="${APP_NAME}"
Oh I almost forget, If you want to enable login with google, you have to fill this too in the *.env* file:

    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    GOOGLE_REDIRECT=


Then you have to run the migrations:

    php artisan migrate
**Now you can try this app in your local machine!**
