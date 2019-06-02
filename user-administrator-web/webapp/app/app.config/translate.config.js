(function () {
  'use strict';
  angular
    .module('mitchapp').config(['$translateProvider', function ($translateProvider) {
      $translateProvider.translations('es', {
        'login': {
          'email': 'Correo',
          'password': 'Contraseña',
          'login': 'Acceder'
        },
        'navbar': {
          'nameApp': 'MITCH-APP',
          'administration': {
            'title': 'Administración',
          },
          'client': {
            'title': 'Clientes',
          },
          'staff': {
            'title': 'Equipo',
          },
          'stores': {
            'title': 'Sucursales',
          },
          'callme': {
            'title': 'contactanos',
          },
        },
        'clients': {
          'title': 'Clientes',
          'store': 'Sucursal',
          'localization': 'Localidad',
          'search': 'Buscar',
          'create': 'Añadir',
          'download': 'Descargar PDF',
          'table': {
            'name': 'Nombre',
            'phone': 'Teléfono',
            'store': 'Agencia',
            'localization': 'Localización',
            'status': 'Status',
            'action': 'Acciones',
            'pageBefore': '<',
            'pageNext': '>',
            'totalElement': 'Total de elementos',
            'active': 'Activo',
            'disabled': 'Desactivado',
            'edit': 'Editar'
          },
          'notElement': 'No hay elementos para mostrar'
        },
        'global': {
          'select': 'SELECCIONAR',
        }
      });

      $translateProvider.preferredLanguage('es');
    }]);
})();