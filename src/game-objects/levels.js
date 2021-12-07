import getGroundComponents from "./ground";
import getWallComponents from "./wall";
import getMeleeEnemyComponents from "./melee-enemy";
import getCoinComponents from "./coin";
import getEndLevelDoorsComponents from "./end-level-door";
const levels = [
  [
    "$                                                      $",
    "$                                                      $",
    "$                                                      $",
    "$                                                      $",
    "$                                                      $",
    "$                                                      $",
    "$                                                  @   $",
    "$                                            @         $",
    "$                                         =======      $",
    "$     c   c   c                       @              d $",
    "$======================================================$",
  ],
  [
    "$                                                      $",
    "$                                                      $",
    "$                                                      $",
    "$                                                      $",
    "$                                        d             $",
    "$                                      ===             $",
    "$                                  ==              @   $",
    "$                       c   c                @         $",
    "$                   c    =========         =======     $",
    "$          ==========                  @               $",
    "$======================================================$",
  ],
];
const levelConfig = {
  width: 32,
  height: 32,
  "=": getGroundComponents,
  $: getWallComponents,
  "@": getMeleeEnemyComponents,
  c: getCoinComponents,
  d: getEndLevelDoorsComponents,
  pos: { x: 0, y: 400 },
};
export { levelConfig };
export default levels;
