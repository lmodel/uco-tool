package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  "A build utility type characterizes the tool used to convert from source code to executable code for a particular version of software."
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class BuildUtilityType extends UcoInherentCharacterizationThing {

  private String buildUtilityName;
  private String cpeid;
  private String swid;

}