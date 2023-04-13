package com.eduardo.customer.service;

import com.eduardo.customer.entity.Customer;
import com.eduardo.customer.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository;

    public List<Customer> list(){
        return  customerRepository.findAll();
    }

    public Optional<Customer> getOne(int customerId){
        return customerRepository.findById(customerId);
    }

    public Optional<Customer> getByCompanyName(String companyName){
        return customerRepository.findByCompanyName(companyName);
    }

    public void save(Customer customer){
        customerRepository.save(customer);
    }

    public void delete(int customerId){
        customerRepository.deleteById(customerId);
    }

    public boolean existsById(int customerId){
        return customerRepository.existsById(customerId);
    }

    public boolean existsByCompanyName(String companyName){
        return customerRepository.existsByCompanyName(companyName);
    }
}
