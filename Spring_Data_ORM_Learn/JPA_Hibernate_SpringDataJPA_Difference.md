# Difference Between JPA, Hibernate, and Spring Data JPA

| JPA | Hibernate | Spring Data JPA |
|-----|-----------|-----------------|
| JPA (Java Persistence API) is a specification. | Hibernate is an ORM framework that implements JPA. | Spring Data JPA is a framework built on top of JPA. |
| It defines standards for object-relational mapping. | It provides the actual implementation of persistence. | It reduces boilerplate code by providing repositories. |
| It does not contain any implementation. | It manages database operations using ORM. | It simplifies CRUD operations using JpaRepository. |
| It is a standard API. | It is one implementation of JPA. | It uses Hibernate (or another JPA provider) internally. |

# Flow

Java Application
        ↓
Spring Data JPA
        ↓
Hibernate
        ↓
JPA Specification
        ↓
MySQL Database