/**
 * "An analytic tool is an artifact of hardware and/or software utilized to accomplish a task or purpose of explanation, interpretation or logical reasoning."
 */
export interface AnalyticTool  extends Tool  {
    /**
     * "The creator organization for a particular tool."
     */_creator?: Identity,
    /**
     * "References to information describing a particular tool."
     */_references?: string,
    /**
     * "An appropriate service pack descriptor for a particular tool."
     */servicePack?: string,
    /**
     * "The type of tool."
     */toolType?: string,
    /**
     * "An appropriate version descriptor of a particular tool."
     */_version?: string,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * "A build facet is a grouping of characteristics unique to a particular version of a software."
 */
export interface BuildFacet  extends Facet  {
    /**
     * "Describes how a particular tool was built."
     */buildInformation?: BuildInformationType,
}
/**
 * "A build information type is a grouping of characteristics that describe how a particular version of software was converted from source code to executable code."
 */
export interface BuildInformationType  extends UcoInherentCharacterizationThing  {
    /**
     * "How the build utility was configured for a particular build of a particular software."
     */buildConfiguration?: Configuration,
    /**
     * "Identifies the utility used to build a software."
     */buildUtility?: BuildUtilityType,
    /**
     * "The compilers utilized during a particular build of a particular software."
     */compilers?: CompilerType[],
    /**
     * "The libraries incorporated into a particular build of a software."
     */libraries?: LibraryType[],
    /**
     * "The compilation date for the build of a software."
     */compilationDate?: string,
    /**
     * "An externally defined unique identifier for a particular build of a software."
     */buildID?: string,
    /**
     * "Relevant label for a particular build of a particular software."
     */buildLabel?: string,
    /**
     * "The output log of the build process for a software."
     */buildOutputLog?: string,
    /**
     * "The project name of a build of a software."
     */buildProject?: string,
    /**
     * "The actual build script for a particular build of a particular software."
     */buildScript?: string,
    /**
     * "The appropriate version descriptor of a particular build of a particular software."
     */buildVersion?: string,
}
/**
 * "A build utility type characterizes the tool used to convert from source code to executable code for a particular version of software."
 */
export interface BuildUtilityType  extends UcoInherentCharacterizationThing  {
    /**
     * "The informally defined name of the utility used to build a particular software."
     */buildUtilityName?: string,
    /**
     * "Specifies the Common Platform Enumeration identifier for the software."
     */_cpeid?: string,
    /**
     * "Specifies the SWID tag for the software."
     */_swid?: string,
}
/**
 * "A compiler type is a grouping of characteristics unique to a specific program that translates computer code written in one programming language (the source language) into another language (the target language). Typically a program that translates source code from a high-level programming language to a lower-level language (e.g., assembly language, object code, or machine code) to create an executable program. [based on https://en.wikipedia.org/wiki/Compiler]"
 */
export interface CompilerType  extends UcoInherentCharacterizationThing  {
    /**
     * "An informal description of a compiler."
     */compilerInformalDescription?: string,
    /**
     * "Specifies the Common Platform Enumeration identifier for the software."
     */_cpeid?: string,
    /**
     * "Specifies the SWID tag for the software."
     */_swid?: string,
}
/**
 * "A ConfiguredTool is a Tool that is known to be configured to run in a more specified manner than some unconfigured or less-configured Tool."
 */
export interface ConfiguredTool  extends Tool  {
    /**
     * A configuration used by an object.
     */usesConfiguration?: Configuration,
    /**
     * The object which has been configured to run in a more specified manner than another object.  This property is expected to have a more specific range when associated with a class, such as a configured Tool having this property have a range of a Tool.
     */isConfigurationOf?: UcoObject,
    /**
     * "The creator organization for a particular tool."
     */_creator?: Identity,
    /**
     * "References to information describing a particular tool."
     */_references?: string,
    /**
     * "An appropriate service pack descriptor for a particular tool."
     */servicePack?: string,
    /**
     * "The type of tool."
     */toolType?: string,
    /**
     * "An appropriate version descriptor of a particular tool."
     */_version?: string,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * "A defensive tool is an artifact of hardware and/or software utilized to accomplish a task or purpose of guarding."
 */
export interface DefensiveTool  extends Tool  {
    /**
     * "The creator organization for a particular tool."
     */_creator?: Identity,
    /**
     * "References to information describing a particular tool."
     */_references?: string,
    /**
     * "An appropriate service pack descriptor for a particular tool."
     */servicePack?: string,
    /**
     * "The type of tool."
     */toolType?: string,
    /**
     * "An appropriate version descriptor of a particular tool."
     */_version?: string,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * "A library type is a grouping of characteristics unique to a collection of resources incorporated into the build of a software."
 */
export interface LibraryType  extends UcoInherentCharacterizationThing  {
    /**
     * "The name of the library."
     */libraryName?: string,
    /**
     * "The version of the library."
     */libraryVersion?: string,
}
/**
 * "A malicious tool is an artifact of hardware and/or software utilized to accomplish a malevolent task or purpose."
 */
export interface MaliciousTool  extends Tool  {
    /**
     * "The creator organization for a particular tool."
     */_creator?: Identity,
    /**
     * "References to information describing a particular tool."
     */_references?: string,
    /**
     * "An appropriate service pack descriptor for a particular tool."
     */servicePack?: string,
    /**
     * "The type of tool."
     */toolType?: string,
    /**
     * "An appropriate version descriptor of a particular tool."
     */_version?: string,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * "A tool is an element of hardware and/or software utilized to carry out a particular function."
 */
export interface Tool  extends UcoObject  {
    /**
     * "The creator organization for a particular tool."
     */_creator?: Identity,
    /**
     * "References to information describing a particular tool."
     */_references?: string,
    /**
     * "An appropriate service pack descriptor for a particular tool."
     */servicePack?: string,
    /**
     * "The type of tool."
     */toolType?: string,
    /**
     * "An appropriate version descriptor of a particular tool."
     */_version?: string,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * An Address Facet is a grouping of characteristics unique to an administrative identifier for a geolocation associated with a specific identity.
 */
export interface AddressFacet  extends IdentityFacet  {
    address?: Location,
}
/**
 * An affiliation is a grouping of characteristics unique to the established affiliations of an entity.
 */
export interface AffiliationFacet  extends IdentityFacet  {
}
/**
 * Birth information is a grouping of characteristics unique to information pertaining to the birth of an entity.
 */
export interface BirthInformationFacet  extends IdentityFacet  {
    birthdate?: string,
}
/**
 * Country of residence is a grouping of characteristics unique to information related to the country, or countries, where an entity resides.
 */
export interface CountryOfResidenceFacet  extends IdentityFacet  {
}
/**
 * Events is a grouping of characteristics unique to information related to specific relevant things that happen in the lifetime of an entity.
 */
export interface EventsFacet  extends IdentityFacet  {
}
/**
 * Identifier is a grouping of characteristics unique to information that uniquely and specifically identities an entity.
 */
export interface IdentifierFacet  extends IdentityFacet  {
}
/**
 * An identity is a grouping of identifying characteristics unique to an individual or organization.
 */
export interface Identity  extends IdentityAbstraction  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * An IdentityFacet is a grouping of characteristics unique to a particular aspect of an identity.
 */
export interface IdentityFacet  extends Facet  {
}
/**
 * Languages is a grouping of characteristics unique to specific syntactically and grammatically standardized forms of communication (human or computer) in which an entity has proficiency (comprehends, speaks, reads, or writes).
 */
export interface LanguagesFacet  extends IdentityFacet  {
}
/**
 * Nationality is a grouping of characteristics unique to the condition of an entity belonging to a particular nation.
 */
export interface NationalityFacet  extends IdentityFacet  {
}
/**
 * Occupation is a grouping of characteristics unique to the job or profession of an entity.
 */
export interface OccupationFacet  extends IdentityFacet  {
}
/**
 * An organization is a grouping of identifying characteristics unique to a group of people who work together in an organized way for a shared purpose. [based on https://dictionary.cambridge.org/us/dictionary/english/organization]
 */
export interface Organization  extends Identity  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * Organization details is a grouping of characteristics unique to an identity representing an administrative and functional structure.
 */
export interface OrganizationDetailsFacet  extends IdentityFacet  {
}
/**
 * A person is a grouping of identifying characteristics unique to a human being regarded as an individual. [based on https://www.lexico.com/en/definition/person]
 */
export interface Person  extends Identity  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * Personal details is a grouping of characteristics unique to an identity representing an individual person.
 */
export interface PersonalDetailsFacet  extends IdentityFacet  {
}
/**
 * Physical info is a grouping of characteristics unique to the outwardly observable nature of an individual person.
 */
export interface PhysicalInfoFacet  extends IdentityFacet  {
}
/**
 * Qualification is a grouping of characteristics unique to particular skills, capabilities or their related achievements (educational, professional, etc.) of an entity.
 */
export interface QualificationFacet  extends IdentityFacet  {
}
/**
 * <Needs fleshed out from CIQ>
 */
export interface RelatedIdentityFacet  extends IdentityFacet  {
}
/**
 * A simple name facet is a grouping of characteristics unique to the personal name (e.g., Dr. John Smith Jr.) held by an identity.
 */
export interface SimpleNameFacet  extends IdentityFacet  {
    familyName?: string,
    givenName?: string,
    honorificPrefix?: string,
    honorificSuffix?: string,
}
/**
 * Visa is a grouping of characteristics unique to information related to a person's ability to enter, leave, or stay for a specified period of time in a country.
 */
export interface VisaFacet  extends IdentityFacet  {
}
/**
 * A GPS coordinates facet is a grouping of characteristics unique to the expression of quantified dilution of precision (DOP) for an asserted set of geolocation coordinates typically associated with satellite navigation such as the Global Positioning System (GPS).
 */
export interface GPSCoordinatesFacet  extends Facet  {
    /**
     * The horizontal dilution of precision of the GPS location.
     */hdop?: number,
    /**
     * The positional (3D) dilution of precision of the GPS location.
     */pdop?: number,
    /**
     * The temporal dilution of precision of the GPS location.
     */tdop?: number,
    /**
     * The vertical dilution of precision of the GPS location.
     */vdop?: number,
}
/**
 * A lat long coordinates facet is a grouping of characteristics unique to the expression of a geolocation as the intersection of specific latitude, longitude, and altitude values.
 */
export interface LatLongCoordinatesFacet  extends Facet  {
    /**
     * The altitude coordinate of a geolocation.
     */altitude?: number,
    /**
     * The latitude coordinate of a geolocation.
     */latitude?: number,
    /**
     * The longitude coordinate of a geolocation.
     */longitude?: number,
}
/**
 * A location is a geospatial place, site, or position.
 */
export interface Location  extends UcoObject  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A simple address facet is a grouping of characteristics unique to a geolocation expressed as an administrative address.
 */
export interface SimpleAddressFacet  extends Facet  {
    /**
     * The type of the address, for instance home or work.
     */addressType?: string,
    /**
     * The name of the geolocation country.
     */country?: string,
    /**
     * The name of the geolocation locality (e.g., city).
     */locality?: string,
    /**
     * The zip-code.
     */postalCode?: string,
    /**
     * The name of the geolocation region (e.g., state).
     */region?: string,
    /**
     * The name of the street.
     */street?: string,
}
/**
 * An annotation is an assertion made in relation to one or more objects.
 */
export interface Annotation  extends Assertion  {
    /**
     * Specifies one or more UcoObjects.
     */object?: UcoObject[],
    /**
     * A textual statement of an assertion.
     */statement?: string,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * An assertion is a statement declared to be true.
 */
export interface Assertion  extends UcoObject  {
    /**
     * A textual statement of an assertion.
     */statement?: string,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * An attributed name is a name of an entity issued by some attributed naming authority.
 */
export interface AttributedName  extends UcoObject  {
    /**
     * Specifies the naming authority that issued the name of the entity.
     */namingAuthority?: string,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A bundle is a container for a grouping of UCO content with no presumption of shared context.
 */
export interface Bundle  extends EnclosingCompilation  {
    /**
     * Specifies one or more UcoObjects.
     */object?: UcoObject[],
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A compilation is a grouping of things.
 */
export interface Compilation  extends UcoObject  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A confidence is a grouping of characteristics unique to an asserted level of certainty in the accuracy of some information.
 */
export interface ConfidenceFacet  extends Facet  {
    /**
     * An asserted level of certainty in the accuracy of some information.
     */confidence?: string,
}
/**
 * A contextual compilation is a grouping of things sharing some context (e.g., a set of network connections observed on a given day, all accounts associated with a given person).
 */
export interface ContextualCompilation  extends Compilation  {
    /**
     * Specifies one or more UcoObjects.
     */object?: UcoObject[],
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A controlled vocabulary is an explicitly constrained set of string values.
 */
export interface ControlledVocabulary  extends UcoObject  {
    /**
     * A reference to a specification for an explicitly constrained set of string values. The specification may be unstructured (e.g., web page listing string values) or structured (e.g. RDF/OWL enumeration).
     */constrainingVocabularyReference?: string,
    /**
     * The name of an explicitly constrained set of string values.
     */constrainingVocabularyName?: string,
    /**
     * A string value.
     */value?: string,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * An enclosing compilation is a container for a grouping of things.
 */
export interface EnclosingCompilation  extends Compilation  {
    /**
     * Specifies one or more UcoObjects.
     */object?: UcoObject[],
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * Characteristics of a reference to a resource outside of the UCO.
 */
export interface ExternalReference  extends UcoInherentCharacterizationThing  {
    /**
     * A URL for some information defined external to the UCO context.
     */referenceURL?: string,
    /**
     * A description of the context relevant to the definition of a particular external reference identifier.
     */definingContext?: string,
    /**
     * An identifier for some information defined external to the UCO context.
     */externalIdentifier?: string,
}
/**
 * A facet is a grouping of characteristics singularly unique to a particular inherent aspect of a UCO domain object.
 */
export interface Facet  extends UcoInherentCharacterizationThing  {
}
/**
 * A grouping is a compilation of referenced UCO content with a shared context.
 */
export interface Grouping  extends ContextualCompilation  {
    /**
     * A description of particular contextual affinity.
     */context?: string,
    /**
     * Specifies one or more UcoObjects.
     */object?: UcoObject[],
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * An identity abstraction is a grouping of identifying characteristics unique to an individual or organization. This class is an ontological structural abstraction for this concept. Implementations of this concept should utilize the identity:Identity class.
 */
export interface IdentityAbstraction  extends UcoObject  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * An item is a distinct article or unit.
 */
export interface Item  extends UcoObject  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A marking definition abstraction is a grouping of characteristics unique to the expression of a specific data marking conveying restrictions, permissions, and other guidance for how marked data can be used and shared. This class is an ontological structural abstraction for this concept. Implementations of this concept should utilize the marking MarkingDefinition class.
 */
export interface MarkingDefinitionAbstraction  extends UcoObject  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A modus operandi is a particular method of operation (how a particular entity behaves or the resources they use).
 */
export interface ModusOperandi  extends UcoObject  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A relationship is a grouping of characteristics unique to an assertion that one or more objects are related to another object in some way.
 */
export interface Relationship  extends UcoObject  {
    /**
     * The ending time of a time range.
     */endTime?: string,
    /**
     * A specification whether or not a relationship assertion is limited to the context FROM a source object(s) TO a target object.
     */isDirectional?: string,
    /**
     * A characterization of the nature of a relationship between objects.
     */kindOfRelationship?: string,
    /**
     * The originating node of a specified relationship.
     */source?: UcoObject[],
    /**
     * The initial time of a time range.
     */startTime?: string,
    /**
     * The terminating node of a specified relationship.
     */target?: UcoObject,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A UCO inherent characterization thing is a grouping of characteristics unique to a particular inherent aspect of a UCO domain object.
 */
export interface UcoInherentCharacterizationThing  extends UcoThing  {
}
/**
 * A UCO object is a representation of a fundamental concept either directly inherent to the cyber domain or indirectly related to the cyber domain and necessary for contextually characterizing cyber domain concepts and relationships. Within the Unified Cyber Ontology (UCO) structure this is the base class acting as a consistent, unifying and interoperable foundation for all explicit and inter-relatable content objects.
 */
export interface UcoObject  extends UcoThing  {
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * UcoThing is the top-level class within UCO.
 */
export interface UcoThing  {
}
/**
 * A configuration is a grouping of characteristics unique to a set of parameters or initial settings for the use of a tool, application, software, or other cyber object.
 */
export interface Configuration  extends UcoObject  {
    /**
     * A single configuration setting entry item for a tool or other software.
     */configurationEntry?: ConfigurationEntry[],
    /**
     * The relevant configuration dependencies for a tool, application, software, or other cyber object.
     */dependencies?: Dependency[],
    /**
     * Description of the various relevant usage context assumptions for a tool or other software .
     */usageContextAssumptions?: string,
    /**
     * The identity that created a characterization of a concept.
     */createdBy?: string,
    /**
     * A human-readable description of an entity
     */description?: string,
    /**
     * Specifies a reference to a resource outside of the UCO.
     */externalReference?: string,
    /**
     * Further sets of properties characterizing a concept based on the particular context of the class and of the particular instance of the concept being characterized.
     */hasFacet?: string,
    /**
     * Specifies the time that this particular version of the object was modified. The object creator can use the time it deems most appropriate as the time this version of the object was modified. The value of the modified property for a given object version MUST be later than or equal to the value of the created property. Object creators MUST update the modified property when creating a new version of an object. The modified timestamp MUST be precise to the nearest millisecond (exactly three digits after the decimal place in seconds).
     */modifiedTime?: string,
    /**
     * The name of a particular concept characterization.
     */name?: string,
    /**
     * Marking definitions to be applied to a particular concept characterization in its entirety.
     */objectMarking?: MarkingDefinitionAbstraction[],
    /**
     * The time at which a characterization of a concept is created. This time pertains to the time of creating the record object, and is not an intrinsic characteristic of the concept.
     */objectCreatedTime?: string,
    /**
     * The version of UCO ontology or subontology specification used to characterize a concept.
     */specVersion?: string,
    /**
     * A generic tag/label.
     */tag?: string,
}
/**
 * A configuration entry is a grouping of characteristics unique to a particular parameter or initial setting for the use of a tool, application, software, or other cyber object.
 */
export interface ConfigurationEntry  extends UcoInherentCharacterizationThing  {
    /**
     * The structured value of a configuration setting entry instance.
     */itemObject?: UcoObject[],
    /**
     * A description of a configuration setting entry item.
     */itemDescription?: string,
    /**
     * The name of a configuration setting entry item.
     */itemName?: string,
    /**
     * The type of a configuration setting entry item.
     */itemType?: string,
    /**
     * The value of a configuration setting entry instance.
     */itemValue?: string,
}
/**
 * A dependency is a grouping of characteristics unique to something that a tool or other software relies on to function as intended.
 */
export interface Dependency  extends UcoInherentCharacterizationThing  {
    /**
     * A description of a tool or other software dependency.
     */dependencyDescription?: string,
    /**
     * The type of a tool or other software dependency.
     */dependencyType?: string,
}

