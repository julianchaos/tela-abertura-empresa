// scripts/MainController.js

(function () {

	'use strict';

	angular
		.module('formlyApp')
		.controller('MainController', MainController);

	function MainController() {
		var vm = this;
		
		vm.empresa = {
			socios: [
				{
					nomeCompleto: '',
				}
			]
		};
		
		vm.empresaFields = [
			{
				className: "section-label",
				template: '<h2>Dados dos sócios</h2>'
			},
			{
				type: 'repeatSection',
				key: 'socios',
				templateOptions: {
					btnText: 'Adicionar sócio',
					fields: [
						{
							className: "row",
							fieldGroup: [
								{
									className: "col-xs-12 col-md-9",
									type: "input",
									key: "nomeCompleto",
									templateOptions: {
										type: 'text',
										label: "Nome Completo",
										required: true
									}
								},
								{
									className: "col-xs-12 col-md-3",
									type: 'input',
									key: 'porcentagem',
									templateOptions: {
										type: 'number',
										label: 'Porcentagem',
										required: true
									}
								},
								{
									className: "col-xs-12 col-md-6",
									type: 'input',
									key: 'telefone',
									templateOptions: {
										type: 'text',
										label: 'Telefone',
										required: true
									}
								},
								{
									className: 'col-xs-12 col-md-6',
									type: 'input',
									key: 'email',
									templateOptions: {
										type: 'email',
										label: 'Email',
										required: true
									}
								},
								{
									className: 'col-xs-12 col-md-6',
									type: 'select',
									key: 'estadoCivil',
									templateOptions: {
										label: 'Estado Civil',
										options: [
											{
												value: 'solteiro',
												name: 'Solteiro'
											},
											{
												value: 'casado',
												name: 'Casado'
											}
										],
										required: true
									}
								},
								{
									className: 'col-xs-12 col-md-6',
									type: 'input',
									key: 'regimeComunhaoBens',
									templateOptions: {
										type: 'text',
										label: 'Regime de Comunhão de Bens'
									},
									expressionProperties: {
										'templateOptions.disabled': function($viewValue, $modelValue, scope){
											if(scope.model.estadoCivil === 'casado') {
												return false;
											}

											return true;
										},
										'templateOptions. required' : function($viewValue, $modelValue, scope) {
											if(scope.model.estadoCivil === 'casado') {
												return true;
											}
											
											return false;
										}
									}
								},
								{
									className: 'col-xs-12 col-md-6',
									type: 'input',
									key: 'qualificacaoProfissional',
									templateOptions: {
										type: 'text',
										label: 'Qualificação Profissional'
									}
								},
								{
									className: 'col-xs-12 col-md-6',
									type: 'input',
									key: 'numeroRegistro',
									templateOptions: {
										type: 'number',
										label: 'Número do Registro'
									}
								}
							]
						}
					]
				}
			}
		];
	}

})();