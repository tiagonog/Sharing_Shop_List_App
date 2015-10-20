<%@ page import="sharingshoplist.Usuario" %>



<div class="fieldcontain ${hasErrors(bean: usuarioInstance, field: 'email', 'error')} required">
	<label for="email">
		<g:message code="usuario.email.label" default="Email" />
		<span class="required-indicator">*</span>
	</label>
	<g:field type="email" name="email" required="" value="${usuarioInstance?.email}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: usuarioInstance, field: 'password', 'error')} required">
	<label for="password">
		<g:message code="usuario.password.label" default="Password" />
		<span class="required-indicator">*</span>
	</label>
	<g:passwordField  name="password" required="" value="${usuarioInstance?.password}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: usuarioInstance, field: 'listas', 'error')} ">
	<label for="listas">
		<g:message code="usuario.listas.label" default="Listas" />

	</label>
	<g:select name="listas" from="${sharingshoplist.Lista.list()}" multiple="multiple" optionKey="id" size="5" value="${usuarioInstance?.listas*.id}" class="many-to-many"/>

</div>
