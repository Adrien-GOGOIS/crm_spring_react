package com.mycompany.api.controller;

import com.mycompany.api.model.Employee;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


import java.util.HashMap;
import java.util.Map;

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class EmployeeControllerTest {

    @Autowired
    public MockMvc mockMvc;

    @Test
    public void should_return_OK_status_when_get_employees() throws Exception {
        mockMvc.perform(get("/employees")).andExpect(status().isOk()).andExpect(jsonPath("$[0].firstName", is("Laurent")));
    }

    @Test
    public void should_return_OK_status_when_get_employee_by_id() throws Exception {
        mockMvc.perform(get("/employees/2")).andExpect(status().isOk()).andExpect(jsonPath("$.firstName", is("Sophie")));
    }

}
