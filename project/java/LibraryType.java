package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  "A library type is a grouping of characteristics unique to a collection of resources incorporated into the build of a software."
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class LibraryType extends UcoInherentCharacterizationThing {

  private String libraryName;
  private String libraryVersion;

}