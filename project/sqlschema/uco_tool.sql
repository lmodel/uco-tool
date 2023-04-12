

CREATE TABLE "AddressFacet" (
	address TEXT, 
	PRIMARY KEY (address)
);

CREATE TABLE "AnalyticTool" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	_creator TEXT, 
	_references TEXT, 
	"servicePack" TEXT, 
	"toolType" TEXT, 
	_version TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag, _creator, _references, "servicePack", "toolType", _version)
);

CREATE TABLE "Annotation" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	statement TEXT, 
	object TEXT NOT NULL, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag, statement, object)
);

CREATE TABLE "Assertion" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	statement TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag, statement)
);

CREATE TABLE "AttributedName" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	"namingAuthority" TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag, "namingAuthority")
);

CREATE TABLE "BirthInformationFacet" (
	birthdate DATETIME, 
	PRIMARY KEY (birthdate)
);

CREATE TABLE "BuildFacet" (
	"buildInformation" TEXT, 
	PRIMARY KEY ("buildInformation")
);

CREATE TABLE "BuildInformationType" (
	"buildConfiguration" TEXT, 
	"buildUtility" TEXT, 
	compilers TEXT, 
	libraries TEXT, 
	"compilationDate" DATETIME, 
	"buildID" TEXT, 
	"buildLabel" TEXT, 
	"buildOutputLog" TEXT, 
	"buildProject" TEXT, 
	"buildScript" TEXT, 
	"buildVersion" TEXT, 
	PRIMARY KEY ("buildConfiguration", "buildUtility", compilers, libraries, "compilationDate", "buildID", "buildLabel", "buildOutputLog", "buildProject", "buildScript", "buildVersion")
);

CREATE TABLE "BuildUtilityType" (
	"buildUtilityName" TEXT, 
	_cpeid TEXT, 
	_swid TEXT, 
	PRIMARY KEY ("buildUtilityName", _cpeid, _swid)
);

CREATE TABLE "Bundle" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	object TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag, object)
);

CREATE TABLE "Compilation" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag)
);

CREATE TABLE "CompilerType" (
	"compilerInformalDescription" TEXT, 
	_cpeid TEXT, 
	_swid TEXT, 
	PRIMARY KEY ("compilerInformalDescription", _cpeid, _swid)
);

CREATE TABLE "ConfidenceFacet" (
	confidence INTEGER NOT NULL, 
	PRIMARY KEY (confidence)
);

CREATE TABLE "Configuration" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	"configurationEntry" TEXT, 
	dependencies TEXT, 
	"usageContextAssumptions" TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag, "configurationEntry", dependencies, "usageContextAssumptions")
);

CREATE TABLE "ConfigurationEntry" (
	"itemObject" TEXT, 
	"itemDescription" TEXT, 
	"itemName" TEXT, 
	"itemType" TEXT, 
	"itemValue" TEXT, 
	PRIMARY KEY ("itemObject", "itemDescription", "itemName", "itemType", "itemValue")
);

CREATE TABLE "ConfiguredTool" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	_creator TEXT, 
	_references TEXT, 
	"servicePack" TEXT, 
	"toolType" TEXT, 
	_version TEXT, 
	"usesConfiguration" TEXT, 
	"isConfigurationOf" TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag, _creator, _references, "servicePack", "toolType", _version, "usesConfiguration", "isConfigurationOf")
);

CREATE TABLE "ContextualCompilation" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	object TEXT NOT NULL, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag, object)
);

CREATE TABLE "ControlledVocabulary" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	"constrainingVocabularyReference" TEXT, 
	"constrainingVocabularyName" TEXT, 
	value TEXT NOT NULL, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag, "constrainingVocabularyReference", "constrainingVocabularyName", value)
);

CREATE TABLE "DefensiveTool" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	_creator TEXT, 
	_references TEXT, 
	"servicePack" TEXT, 
	"toolType" TEXT, 
	_version TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag, _creator, _references, "servicePack", "toolType", _version)
);

CREATE TABLE "Dependency" (
	"dependencyDescription" TEXT, 
	"dependencyType" TEXT, 
	PRIMARY KEY ("dependencyDescription", "dependencyType")
);

CREATE TABLE "EnclosingCompilation" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	object TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag, object)
);

CREATE TABLE "ExternalReference" (
	"referenceURL" TEXT, 
	"definingContext" TEXT, 
	"externalIdentifier" TEXT, 
	PRIMARY KEY ("referenceURL", "definingContext", "externalIdentifier")
);

CREATE TABLE "GPSCoordinatesFacet" (
	hdop FLOAT, 
	pdop FLOAT, 
	tdop FLOAT, 
	vdop FLOAT, 
	PRIMARY KEY (hdop, pdop, tdop, vdop)
);

CREATE TABLE "Grouping" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	object TEXT NOT NULL, 
	context TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag, object, context)
);

CREATE TABLE "Identity" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag)
);

CREATE TABLE "IdentityAbstraction" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag)
);

CREATE TABLE "Item" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag)
);

CREATE TABLE "LatLongCoordinatesFacet" (
	altitude FLOAT, 
	latitude FLOAT, 
	longitude FLOAT, 
	PRIMARY KEY (altitude, latitude, longitude)
);

CREATE TABLE "LibraryType" (
	"libraryName" TEXT, 
	"libraryVersion" TEXT, 
	PRIMARY KEY ("libraryName", "libraryVersion")
);

CREATE TABLE "Location" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag)
);

CREATE TABLE "MaliciousTool" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	_creator TEXT, 
	_references TEXT, 
	"servicePack" TEXT, 
	"toolType" TEXT, 
	_version TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag, _creator, _references, "servicePack", "toolType", _version)
);

CREATE TABLE "MarkingDefinitionAbstraction" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag)
);

CREATE TABLE "ModusOperandi" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag)
);

CREATE TABLE "Organization" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag)
);

CREATE TABLE "Person" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag)
);

CREATE TABLE "Relationship" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	"endTime" DATETIME, 
	"isDirectional" BOOLEAN NOT NULL, 
	"kindOfRelationship" TEXT, 
	source TEXT NOT NULL, 
	"startTime" DATETIME, 
	target TEXT NOT NULL, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag, "endTime", "isDirectional", "kindOfRelationship", source, "startTime", target)
);

CREATE TABLE "SimpleAddressFacet" (
	"addressType" TEXT, 
	country TEXT, 
	locality TEXT, 
	"postalCode" TEXT, 
	region TEXT, 
	street TEXT, 
	PRIMARY KEY ("addressType", country, locality, "postalCode", region, street)
);

CREATE TABLE "SimpleNameFacet" (
	"familyName" TEXT, 
	"givenName" TEXT, 
	"honorificPrefix" TEXT, 
	"honorificSuffix" TEXT, 
	PRIMARY KEY ("familyName", "givenName", "honorificPrefix", "honorificSuffix")
);

CREATE TABLE "Tool" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	_creator TEXT, 
	_references TEXT, 
	"servicePack" TEXT, 
	"toolType" TEXT, 
	_version TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag, _creator, _references, "servicePack", "toolType", _version)
);

CREATE TABLE "UcoObject" (
	"createdBy" TEXT, 
	description TEXT, 
	"externalReference" TEXT, 
	"hasFacet" TEXT, 
	"modifiedTime" DATETIME, 
	name TEXT, 
	"objectMarking" TEXT, 
	"objectCreatedTime" DATETIME, 
	"specVersion" TEXT, 
	tag TEXT, 
	PRIMARY KEY ("createdBy", description, "externalReference", "hasFacet", "modifiedTime", name, "objectMarking", "objectCreatedTime", "specVersion", tag)
);
