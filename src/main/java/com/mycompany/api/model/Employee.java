package com.mycompany.api.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name= "first_name")
    private String firstName;

    @Column
    private String lastName;

    private String mail;

    private String password;

    public void setData(Employee employee) {
        this.firstName = employee.firstName;
        this.lastName = employee.lastName;
        this.mail = employee.mail;
        this.password = employee.password;
    }
}
