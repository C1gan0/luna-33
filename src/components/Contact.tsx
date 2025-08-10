"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Esquema de validação
const contactFormSchema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
  email: z.string().email("Por favor, insira um e-mail válido."),
  subject: z.string().min(5, "O assunto deve ter no mínimo 5 caracteres."),
  message: z.string().min(10, "A mensagem deve ter no mínimo 10 caracteres."),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmissionSuccess(false);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula envio
      setSubmissionSuccess(true);
      reset();
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contato"
      className="bg-white py-24 px-6 md:py-32 md:px-12"
      aria-label="Formulário de contato"
    >
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
          Entre em Contato
        </h2>

        {submissionSuccess && (
          <div
            className="flex items-center justify-center gap-3 bg-green-50 border border-green-400 text-green-700 p-4 rounded-md mb-10 animate-fade-in"
            role="alert"
          >
            <svg
              className="w-6 h-6 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <p className="font-semibold text-lg">
              Mensagem enviada com sucesso! Em breve entraremos em contato.
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 text-left"
          noValidate
        >
          {[
            { id: "name", label: "Seu Nome", type: "text" },
            { id: "email", label: "Seu E-mail", type: "email" },
            { id: "subject", label: "Assunto", type: "text" },
          ].map(({ id, label, type }) => (
            <div key={id} className="relative">
              <input
                type={type}
                id={id}
                {...register(id as keyof ContactFormData)}
                disabled={isSubmitting}
                placeholder=" "
                aria-invalid={!!errors[id as keyof ContactFormData]}
                aria-describedby={`${id}-error`}
                className={`peer block w-full appearance-none border-2 rounded-md bg-transparent px-3 pt-6 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200 ${
                  errors[id as keyof ContactFormData]
                    ? "border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500 animate-pulse"
                    : "border-gray-300"
                }`}
              />
              <label
                htmlFor={id}
                className="absolute left-3 top-2 z-10 origin-[0] scale-100 transform text-gray-500 duration-200 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-blue-600"
              >
                {label}
              </label>
              {errors[id as keyof ContactFormData] && (
                <p
                  id={`${id}-error`}
                  className="mt-1 text-sm text-red-600 flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"
                    />
                  </svg>
                  {errors[id as keyof ContactFormData]?.message}
                </p>
              )}
            </div>
          ))}

          <div className="relative">
            <textarea
              id="message"
              {...register("message")}
              disabled={isSubmitting}
              placeholder=" "
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
              className={`peer block w-full appearance-none border-2 rounded-md bg-transparent px-3 pt-6 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm min-h-[120px] resize-none transition-all duration-200 ${
                errors.message
                  ? "border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500 animate-pulse"
                  : "border-gray-300"
              }`}
            />
            <label
              htmlFor="message"
              className="absolute left-3 top-2 z-10 origin-[0] scale-100 transform text-gray-500 duration-200 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-1 peer-focus:scale-75 peer-focus:text-blue-600"
            >
              Mensagem
            </label>
            {errors.message && (
              <p
                id="message-error"
                className="mt-1 text-sm text-red-600 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"
                  />
                </svg>
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3.536-3.536A9 9 0 003 12h1z"
                    ></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                "Enviar Mensagem"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
