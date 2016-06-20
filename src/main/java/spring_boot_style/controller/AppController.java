package spring_boot_style.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import spring_boot_style.models.App;
import spring_boot_style.models.AppRepo;

import java.util.List;

@RestController
public class AppController {

    @Autowired
    private AppRepo appRepo;

    @RequestMapping(value = "/app/getRecom/{appid}", method = RequestMethod.GET)
    public List<App> getRecommendedApps(@PathVariable String appid) {
        // return appRepo.findAll();
        // return appRepo.findAll().sort(Comparator.comparing());
        return appRepo.findRecommendedAppsByAppid(appid);
    }

    @RequestMapping(value = "app/{appid}", method = RequestMethod.GET)
    public App getApp(@PathVariable String appid) {
        return appRepo.findOne(appid);
    }

}
