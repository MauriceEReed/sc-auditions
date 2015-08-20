'use strict';

//Setting up route
angular.module('projects').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Projects state routing
		$stateProvider.
		state('listProjects', {
			url: '/projects',
			templateUrl: 'modules/projects/views/list-projects.client.view.html'
		}).
		state('clientListProjects', {
			url: '/projects-client',
			templateUrl: 'modules/projects/views/client-list-projects.client.view.html'
		}).
		state('clientListProjectsSingle', {
			url: '/projects-client/:projectId',
			templateUrl: 'modules/projects/views/client-list-projects.client.view.html'
		}).
		state('createProject', {
			abstract: true,
			url: '/projects/create',
			controller: 'ProjectsController',
			templateUrl: 'modules/projects/views/create-project.client.view.html'
		}).
		state('createProject.project', {
			url: '',
			parent: 'createProject',
			templateUrl: 'modules/projects/views/create-project/project.client.view.html'
		}).
		state('createProject.talent', {
			url: '/talent',
			parent: 'createProject',
			templateUrl: 'modules/projects/views/create-project/talent.client.view.html'
		}).
		state('createDupProject', {
			abstract: true,
			url: '/projects/create/:projectId',
			controller: 'ProjectsController',
			templateUrl: 'modules/projects/views/create-project.client.view.html'
		}).
		state('createDupProject.project', {
			url: '',
			parent: 'createDupProject',
			templateUrl: 'modules/projects/views/create-project/project.client.view.html'
		}).
		state('createDupProject.talent', {
			url: '/talent',
			parent: 'createDupProject',
			templateUrl: 'modules/projects/views/create-project/talent.client.view.html'
		}).
		state('newAuditionProject', {
			url: '/projects/new-audition-form',
			templateUrl: 'modules/projects/views/new-audition-project.client.view.html'
		}).
		state('newAuditionProjectThanks', {
			url: '/projects/new-audition-form/thanks',
			templateUrl: 'modules/projects/views/new-audition-project-thanks.client.view.html'
		}).
		state('talentAuditionUploadProject', {
			url: '/projects/talent-upload/:projectId/:talentId',
			templateUrl: 'modules/projects/views/talent-audition-upload.client.view.html'
		}).
		state('viewProject', {
			url: '/projects/:projectId',
			templateUrl: 'modules/projects/views/view-project.client.view.html'
		}).
		state('editProject', {
			url: '/projects/:projectId/edit',
			templateUrl: 'modules/projects/views/edit-project.client.view.html'
		});
	}
]);