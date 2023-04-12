package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  "A tool is an element of hardware and/or software utilized to carry out a particular function."
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class Tool extends UcoObject {

  private Identity creator;
  private List<String> references;
  private String servicePack;
  private String toolType;
  private String version;

}