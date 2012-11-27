grant all on fb_login.* to root@localhost identified by 'condor';

USE fb_login
DROP TABLE IF EXISTS users;
create table users (
    id int not null auto_increment primary key,
    facebook_user_id varchar(30) unique,
    facebook_user_gender varchar(30),
    facebook_name varchar(255),
    facebook_picture varchar(255),
    facebook_access_token varchar(255),
    created datetime,
    modified datetime
);
