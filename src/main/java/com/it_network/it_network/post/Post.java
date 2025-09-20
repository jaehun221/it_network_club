package com.it_network.it_network.post;

import jakarta.persistence.*;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "post_tbl")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Integer id; // 게시물 일련번호

    @Column(nullable = false)
    private Integer member_id; // 회원 일련번호

    @Column(nullable = false)
    private Integer category_id; // 카테고리 일련번호

    @Column(nullable = false, length = 1000)
    private String title; // 제목

    @Lob
    @Column(nullable = false)
    private String contents; // 내용

    @Column(nullable = false,  columnDefinition = "INT DEFAULT 0")
    private Integer hit_cnt = 0; // 조회수 기본값 0

    @Column(nullable = false)
    private Integer reg_id; // 등록자

    @CreationTimestamp
    @Column(nullable = false)
    private LocalDateTime reg_date; // 등록일

    @Column()
    private Integer upd_id; // 수정자

    @UpdateTimestamp
    @Column()
    private LocalDateTime upd_date; // 수정일
}

