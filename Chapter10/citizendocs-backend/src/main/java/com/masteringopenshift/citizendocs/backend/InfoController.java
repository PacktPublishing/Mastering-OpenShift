package com.masteringopenshift.citizendocs.backend;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/info")
public class InfoController {

    @ConfigProperty(name = "application.name")
    String appName;

    @ConfigProperty(name = "application.version")
    String appVersion;

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getAppInfo() {
        return "Application Name: " + appName + ", Version: " + appVersion;
    }
}
