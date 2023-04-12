package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  "A build facet is a grouping of characteristics unique to a particular version of a software."
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class BuildFacet extends Facet {

  private BuildInformationType buildInformation;

}