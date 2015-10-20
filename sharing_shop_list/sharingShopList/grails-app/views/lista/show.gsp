
<%@ page import="sharingshoplist.Lista" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'lista.label', default: 'Lista')}" />
		<title><g:message code="default.show.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#show-lista" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="list" action="index"><g:message code="lista.list.label" args="[entityName]" /></g:link></li>
				<li><g:link class="create" action="create"><g:message code="lista.new.label" args="[entityName]" /></g:link></li>
				<g:link class="edit" action="edit" resource="${listaInstance}"><g:message code="lista.button.edit.label" default="Edit" /></g:link>
			</ul>
		</div>
		<div id="show-lista" class="content scaffold-show" role="main">
			<h1><g:message code="default.show.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<ol class="property-list lista">

				<g:if test="${listaInstance?.name}">
				<li class="fieldcontain">
					<span id="name-label" class="property-label"><g:message code="lista.name.label" default="Name" /></span>

						<span class="property-value" aria-labelledby="name-label"><g:fieldValue bean="${listaInstance}" field="name"/></span>

				</li>
				</g:if>

				<g:if test="${listaInstance?.produtos}">
				<li class="fieldcontain">
					<span id="produtos-label" class="property-label"><g:message code="lista.produtos.label" default="Produtos" /></span>

						<g:each in="${listaInstance.produtos}" var="p">
						<span class="property-value" aria-labelledby="produtos-label"><g:link controller="produto" action="show" id="${p.id}">${p?.encodeAsHTML()}</g:link></span>
						</g:each>

				</li>
				</g:if>

				<g:if test="${listaInstance?.usuarios}">
				<li class="fieldcontain">

					<span id="usuarios-label" class="property-label"><g:message code="lista.usuarios.label" default="Usuarios" /></span>
					<g:textField name="name" required="" value="TESTE"/>

						<g:each in="${listaInstance.usuarios}" var="u">
						<span class="property-value" aria-labelledby="produtos-label"><g:link controller="usuario" action="show" id="${u.id}">${p?.encodeAsHTML()}</g:link></span>
						</g:each>

				</li>
				</g:if>

			</ol>
			<g:form url="[resource:listaInstance, action:'delete']" method="DELETE">
				<fieldset class="buttons">
					<g:link class="edit" action="edit" resource="${listaInstance}"><g:message code="lista.button.edit.label" default="Edit" /></g:link>
					<g:link class="edit" action="addProduct" resource="${listaInstance}"><g:message code="lista.addProduct.label" default="Add Product" /></g:link>				</fieldset>
			</g:form>
		</div>
	</body>
</html>
