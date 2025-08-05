// components/Contact.tsx
"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// 1. Defina o schema de validação com Zod
// Isso garante que os dados do formulário tenham a estrutura e o formato corretos
const contactFormSchema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
  email: z.string().email("Por favor, insira um e-mail válido."),
  subject: z.string().min(5, "O assunto deve ter no mínimo 5 caracteres."),
  message: z.string().min(10, "A mensagem deve ter no mínimo 10 caracteres."),
});

// 2. Extraia o tipo dos dados do formulário a partir do schema
type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // 3. Inicialize o useForm com o resolver do Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // 4. Função que lida com o envio do formulário
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmissionSuccess(false);

    // Simulação de envio para um backend
    console.log("Dados do formulário:", data);
    
    try {
      // Exemplo de como você enviaria os dados para um endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      
      // if (response.ok) {
      //   setSubmissionSuccess(true);
      //   reset(); // Limpa o formulário após o envio
      // } else {
      //   throw new Error('Falha no envio.');
      // }
      
      // Simulação de delay para mostrar o estado de envio
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmissionSuccess(true);
      reset();
      
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      // Você pode adicionar um estado para exibir uma mensagem de erro ao usuário
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Usa classes de espaçamento e background similares à seção Services
    <section id="contact" className="bg-white py-24 px-6 md:py-32 md:px-12">
      <div className="mx-auto text-center">
        {/* Título com a mesma tipografia e margem da seção Services */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-16">Entre em Contato</h2>
        
        {submissionSuccess && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8" role="alert">
            <p className="font-bold">Mensagem enviada com sucesso!</p>
            <p>Em breve entraremos em contato com você.</p>
          </div>
        )}

        {/* max-w-xl para centralizar e limitar a largura do formulário */}
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-6 text-left">
          {/* Campo Nome */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              disabled={isSubmitting}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          {/* Campo Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Seu E-mail</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              disabled={isSubmitting}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          {/* Campo Assunto */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
            <input
              type="text"
              id="subject"
              {...register("subject")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              disabled={isSubmitting}
            />
            {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
          </div>

          {/* Campo Mensagem */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Sua Mensagem</label>
            <textarea
              id="message"
              rows={4}
              {...register("message")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              disabled={isSubmitting}
            />
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
          </div>

          {/* Botão de Envio */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}