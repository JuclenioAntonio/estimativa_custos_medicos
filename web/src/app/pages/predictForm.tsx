'use client';
import React, {useState, useRouter } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

interface FormData {
    age: number;
    sex: string;
    bmi: number;
    children: number;
    smoker: boolean;
    region: string;
}

const initialState: FormData = {
    age: 23,
    sex: "male",
    bmi: 24,
    children: 0,
    smoker: true,
    region: 'southwest'

}

const Formulario = () => {
    const [apiResponse, setApiResponse] = useState<any>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormData>(initialState);
    let data = null;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value } = event.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8000/previsao/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok){
            let data = await response.json();
            data = data["charge"].toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
            setApiResponse(data);
            setSuccessMessage('O custo médico previsto é'); 
        } else {
            setApiResponse(null);
            console.error('Falha no envio dos dados');
        }
    }

    return (

    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Prever custos médicos</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Análise de risco para seguros de saúde e vida </p>

          {successMessage && ( 
                <div className="mt-6 border border-green-500 rounded-md p-4">
                <p>{successMessage}: {apiResponse}Kz</p>
                
                </div>
            )}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Idade
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="age"
                  id="age"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.age} onChange={handleChange} 
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="sex" className="block text-sm font-medium leading-6 text-gray-900">
                Gênero
              </label>
              <div className="mt-2">
                <select
                    id="sex"
                    name="sex"
                    autoComplete="sexo"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={formData.sex} onChange={handleChange}
                    >
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="bmi" className="block text-sm font-medium leading-6 text-gray-900">
                BMI
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="bmi"
                  id="bmi"
                  autoComplete="bmi"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.bmi} onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="children" className="block text-sm font-medium leading-6 text-gray-900">
                Filhos
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="children"
                  id="children"
                  autoComplete="children"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.children} onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="smoker" className="block text-sm font-medium leading-6 text-gray-900">
                Fumante?
              </label>
              <div className="mt-2">
              <select
                    id="smoker"
                    name="smoker"
                    autoComplete="smoker"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={formData.smoker} onChange={handleChange}
                    >
                    <option value="yes">Sim</option>
                    <option value="no">Não</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Região
              </label>
              <div className="mt-2">
              <select
                    id="region"
                    name="region"
                    autoComplete="region"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={formData.region} onChange={handleChange}
                    >
                    <option value="northwest">Northwest</option>
                    <option value="southwest">Southwest</option>
                    <option value="northeast">Northeast</option>
                    <option value="southeast">Southeast</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Prever
        </button>
      </div>
    </form>

    );
}

export default Formulario;



