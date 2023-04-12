package None;

import java.util.List;
import lombok.*;



/* version: 1.1.0 */


/**
  "A ConfiguredTool is a Tool that is known to be configured to run in a more specified manner than some unconfigured or less-configured Tool."
**/
@Data
@EqualsAndHashCode(callSuper=false)
public class ConfiguredTool extends Tool {

  private Configuration usesConfiguration;
  private UcoObject isConfigurationOf;

}