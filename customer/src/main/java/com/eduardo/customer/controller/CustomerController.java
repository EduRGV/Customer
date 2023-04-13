package com.eduardo.customer.controller;

import com.eduardo.customer.dto.CustomerDto;
import com.eduardo.customer.dto.Mensaje;
import com.eduardo.customer.entity.Customer;
import com.eduardo.customer.service.CustomerService;
import io.micrometer.common.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @GetMapping("/list")
    public ResponseEntity<List<Customer>> list(){
        List<Customer> list = customerService.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{customerId}")
    public ResponseEntity<Customer> getById(@PathVariable("customerId") int customerId){
        if (!customerService.existsById(customerId))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Customer customer = customerService.getOne(customerId).get();
        return new ResponseEntity(customer, HttpStatus.OK);
    }

    @GetMapping("/detailname/{companyName}")
    public ResponseEntity<Customer> getByCompanyName(@PathVariable("companyName") String companyName){
        if (!customerService.existsByCompanyName(companyName))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        Customer customer = customerService.getByCompanyName(companyName).get();
        return new ResponseEntity(customer, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<?> create (@RequestBody CustomerDto customerDto){
        if (StringUtils.isBlank(customerDto.getCompanyName()))
            return new ResponseEntity(new Mensaje("el nombre de la empresa es obligatorio"), HttpStatus.BAD_REQUEST);
        if (customerService.existsByCompanyName(customerDto.getCompanyName()))
            return new ResponseEntity(new Mensaje("ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        Customer customer = new Customer(customerDto.getCompanyName(), customerDto.getContactName(), customerDto.getContactTitle(), customerDto.getAddress(), customerDto.getCity(), customerDto.getRegion(), customerDto.getPostalCode(), customerDto.getCountry(), customerDto.getPhone(), customerDto.getFax());
        customerService.save(customer);
        return new ResponseEntity(new Mensaje("customer creado"), HttpStatus.OK);
    }
    @PutMapping("/update/{customerId}")
    public ResponseEntity<?> update (@PathVariable("customerId") int customerId, @RequestBody CustomerDto customerDto){
        if (!customerService.existsById(customerId))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        if (customerService.existsByCompanyName(customerDto.getCompanyName()) && customerService.getByCompanyName(customerDto.getCompanyName()).get().getCustomerId() != customerId)
            return new ResponseEntity(new Mensaje("ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        if (StringUtils.isBlank(customerDto.getCompanyName()))
            return new ResponseEntity(new Mensaje("el nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        Customer customer = customerService.getOne(customerId).get();
        customer.setCompanyName(customerDto.getCompanyName());
        customer.setContactName(customerDto.getContactName());
        customer.setContactTitle(customerDto.getContactTitle());
        customer.setAddress(customerDto.getAddress());
        customer.setCity(customerDto.getCity());
        customer.setRegion(customerDto.getRegion());
        customer.setPostalCode(customerDto.getPostalCode());
        customer.setCountry(customerDto.getCountry());
        customer.setPhone(customerDto.getPhone());
        customer.setFax(customerDto.getFax());
        customerService.save(customer);
        return new ResponseEntity(new Mensaje("customer actualizado"), HttpStatus.OK);
    }
    @DeleteMapping("/delete/{customerId}")
    public ResponseEntity<?> delete(@PathVariable("customerId")int customerId){
        if (!customerService.existsById(customerId))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);
        customerService.delete(customerId);
        return new ResponseEntity(new Mensaje("customer eliminado"), HttpStatus.OK);
    }
}
