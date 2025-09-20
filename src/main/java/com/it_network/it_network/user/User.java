package com.it_network.it_network.user;


import jakarta.persistence.*;

@Entity
@Table(name = "member_tbl")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uid;

    @Column(nullable = false, unique = true)
    private String user_id;

    @Column(nullable = false)
    private String user_pw;

    @Column(nullable = false, unique = true)
    private String user_nm;

    @Column(nullable = false, unique = true)
    private String email;

}
