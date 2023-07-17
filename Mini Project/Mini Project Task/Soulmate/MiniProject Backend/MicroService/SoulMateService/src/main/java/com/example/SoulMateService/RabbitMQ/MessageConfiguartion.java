package com.example.SoulMateService.RabbitMQ;


import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;

import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MessageConfiguartion {
    //creating required beans like queue,exchange,converter,rabbittemplet,binding

    private String exchange_name="user_exchange";
    private String queue_name="user_queue";

    //Queue Bean:
    @Bean
    public Queue getQueue(){
        return new Queue(queue_name);
    }
    //Exchange bean: using direct type of exchange
    @Bean
    public DirectExchange getDirectExchange(){
        return new DirectExchange(exchange_name);
    }
    //converter bean:
    @Bean
    public Jackson2JsonMessageConverter getMessageConverter(){
        return new Jackson2JsonMessageConverter();
    }
    //rabbittemplate bean
    @Bean
    public RabbitTemplate getTemplate(final ConnectionFactory connectionFactory){
        RabbitTemplate rabbitTemplate=new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(getMessageConverter());
        return rabbitTemplate;
    }
    @Bean
    public Binding getBinding(Queue queue, DirectExchange directExchange){
        return BindingBuilder.bind(queue).to(directExchange).with("mail_binding");
    }
}
