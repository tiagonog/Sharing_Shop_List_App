<%@ page import="sharingshoplist.Lista" %>



<div class="fieldcontain ${hasErrors(bean: listaInstance, field: 'name', 'error')} required">
	<label for="name">
		<g:message code="lista.name.label" default="Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="name" required="" value="${listaInstance?.name}"/>

</div>
