# TigerX Mini Projects Session 4 Group 9 Java Appstore 

## Description
  
App data was crawled from [Huawei appstore](http://appstore.huawei.com/soft/list) and our application is a single page application (SPA) that displays the top 20 applications from the appstore. When a user clicks on a specific app, the detailed app information and 5 related recommended apps are displayed. Visit our [heroku deployment demo here](http://bittigerx-java-appstore.herokuapp.com/). Note the app currently only works on http not https.

# Usage
 
- Generate jar with Maven. Use `java -jar target/jar-filename.jar` from command line. This is the method used for our heroku deployment.
- We have not tested the war file deployment yet.
- Use an IDE like eclipse or IntelliJ IDEA.

# Components/Structure
  
- Spring-Boot, Hibernate ORM, Spring Data JPA, Lombok.
- MySQL (data storage)
- Tomcat 8.0 (web server)
- Front end: BootStrap, Jquery, and AngularJS (UX).
- Built with Maven.

# Team

- [Zexi Jesse Zhuang](http://jessezhuang.github.io/)
- [Zhihao Wu](https://github.com/ttylcc)

# Acknowledgment

Thank [Qun Wu](https://github.com/QunWu) for the guidance in the project and [Jerry Yang](https://github.com/imjerryyang) for organizing and encouragements.

