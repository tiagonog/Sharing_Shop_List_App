
<%@ page import="sharingshoplist.Lista" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'lista.label', default: 'Lista')}" />
		<title><g:message code="lista.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#list-lista" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="create" action="create"><g:message code="lista.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="list-lista" class="content scaffold-list" role="main">
			<h1><g:message code="lista.list.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
				<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table>
			<thead>
					<tr>
						<g:sortableColumn property="name" title="${message(code: 'lista.name.label', default: 'Nome')}" />				</tr>
			</thead>
			<tbody>
			<g:each in="${listaInstanceList}" status="i" var="listaInstance">
				<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">
					<td><g:link action="show" id="${listaInstance.id}">${fieldValue(bean: listaInstance, field: "name")}</g:link></td>
				</tr>
			</g:each>
			</tbody>
		</table>
		<div class="pagination">
			<g:paginate total="${listaInstanceCount ?: 0}" />
		</div>
	</div>
	</body>
</html>
