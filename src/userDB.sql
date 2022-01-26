package login.db;

CREATE TABLE User
        (
        UserName   VARCHAR(40) UNSIGNED NOT NULL auto_increment,
        name      VARCHAR(50),
        email       VARCHAR(40),
        user_DOB       DATE(30),
        password  VARCHAR(40),
        phone       VARCHAR(12),
        address    VARCHAR(100),

        UserDestination    VARCHAR(40),
        UserStay    VARCHAR(100),
        UserItinerary  VARCHAR(100),
        UserLodging     VARCHAR(40),
        UserTransportation VARCHAR(40),
        UserCost        VARCHAR(10),
        add_date   TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
        PRIMARY KEY (UserName),
        )
        engine=innodb
        DEFAULT charset=utf8;