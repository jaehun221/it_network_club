package com.it_network.it_network.user;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddUserRequestDto {
    private String user_id;
    private String user_pw;
    private String user_nm;
    private String email;

}