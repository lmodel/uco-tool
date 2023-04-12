package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  "A build information type is a grouping of characteristics that describe how a particular version of software was converted from source code to executable code."
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class BuildInformationType extends UcoInherentCharacterizationThing {

  private Configuration buildConfiguration;
  private BuildUtilityType buildUtility;
  private List<CompilerType> compilers;
  private List<LibraryType> libraries;
  private String compilationDate;
  private String buildID;
  private String buildLabel;
  private String buildOutputLog;
  private String buildProject;
  private String buildScript;
  private String buildVersion;

}