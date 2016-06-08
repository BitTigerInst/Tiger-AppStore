package io.bit_tiger.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "app_info")
public class AppInfo {

    @Id
    @GeneratedValue
    @NotNull
    private long appid;

    private int scope;
    private String title;
    private String url;
    private String thumbnailUrl;
    private String intro;
    private String developer;
    private String top5App;


}
