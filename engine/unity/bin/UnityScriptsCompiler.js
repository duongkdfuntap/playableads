if ( TRACE ) { TRACE( JSON.parse( '["BoxHealth#init","BoxHealth#Start","BoxHealth#TakeDamage","BoxHealth#UpdateText","BoxHealth#OnCollisionEnter","CoinCollector#init","CoinCollector#OnEnable","CoinCollector#OnDisable","CoinCollector#HandleCoinCollected","CoinCollector#MoveCoinToUI","CoinCollector#AddCoin","LegoSDK.Bullet.LGSDKBulletManager#init","LegoSDK.Bullet.LGSDKBulletManager#ctor","LegoSDK.Bullet.LGSDKBulletManager#HandleBulletEventTriggered","LegoSDK.Bullet.LGSDKBulletManager#Unsubscribe","LegoSDK.Bullet.LGSDKBulletManager#ClearSubscribers","LegoSDK.Follower.LGSDKFollowerManager#init","LegoSDK.Follower.LGSDKFollowerManager#ctor","LegoSDK.Follower.LGSDKFollowerManager#HandleFollowerEventTriggered","LegoSDK.Follower.LGSDKFollowerManager#Unsubscribe","LegoSDK.Follower.LGSDKFollowerManager#ClearSubscribers","LegoSDK.FollowerDataGroup.LGSDKFollowerDataGroup#init","LegoSDK.Leader.LGSDKLeaderManager#init","LegoSDK.Leader.LGSDKLeaderManager#ctor","LegoSDK.Leader.LGSDKLeaderManager#HandleLeaderEventTriggered","LegoSDK.Leader.LGSDKLeaderManager#Unsubscribe","LegoSDK.Leader.LGSDKLeaderManager#ClearSubscribers","LegoSDK.Prop.LGSDKGoldCoin#Start","LegoSDK.Prop.LGSDKGoldCoin#Update","LegoSDK.Prop.LGSDKGoldCoin#OnTriggerEnter","LegoSDK.Prop.LGSDKPropManager#TriggerCoinEnter","LegoSDK.Prop.LGSDKPropManager#TriggerLootCharactorEnter","LegoSDK.Prop.LGSDKPropManager#TriggerLootBulletEnter","LegoSDK.Prop.LGSDKPropManager#TriggerWarriorPrisonBulletEnter","LegoSDK.Prop.LGSDKPropManager#TriggerWarriorPrisonCharactorEnter","LegoSDK.Prop.LGSDKPropManager#TriggerWarriorEnter","LegoSDK.Prop.LGSDKWarrior#init","LegoSDK.Prop.LGSDKWarrior#Start","LegoSDK.Prop.LGSDKWarrior#Update","LegoSDK.Prop.LGSDKWarrior#LevelUp","LegoSDK.Prop.LGSDKWarrior#OnTriggerEnter","LegoSDK.Prop.LGSDKWarrior#ReleaseWarrior","LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#Instance#get","LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#Awake","LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#OnDestroy","LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleLeaderCollision","LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleBulletCollision","LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleBulletWithSingleGateCollision","LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleFollowerCollision","LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleFireRateGateCollision","LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleAtkRangeGateCollision","LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#IncreaseFireRateOrDamage","LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleSumonerCollision","LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#SetFollowerInfo","LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleCoinCollected","LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleWarriorCollision","LegoTimelineUpMechanic.Gate.LGSDKSingGateManager#ctor","LegoTimelineUpMechanic.Gate.LGSDKSingGateManager#HandleFireRateEventTriggered","LegoTimelineUpMechanic.Gate.LGSDKSingGateManager#HandleAtkRangeEventTriggered","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#init","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#Start","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#Update","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#UpdateText","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#PatrolRoutine","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#OnTriggerEnter","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#incrementAtkRange","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#TakeDamage","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#OnShieldDestroyed","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#UpdateHealthUI","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#GetAtkRange","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#GetCurrentHealth","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#GetMaxHealth","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#IsShieldActive","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#IsHiddenDamage","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#init","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#OnTriggerEnter","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#Start","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#Update","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#UpdateText","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#PatrolRoutine","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#incrementFireRate","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#TakeDamage","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#UpdateHealthUI","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#OnShieldDestroyed","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#GetFireRate","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#GetCurrentHealth","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#GetMaxHealth","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#IsShieldActive","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#IsHiddenDamage","LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior#init","LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior#OnTriggerEnter","LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior#GetFollowerInfo","LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior#SetFollowerInfo","LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior#GetMaxFollower","LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager#ctor","LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager#HandleSumonerCollisionEventTriggered","LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#init","LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#Awake","LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#Start","LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#Update","LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#InitializeObstacleType","LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#Initialize","LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#TriggerEffect","LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#OnTriggerEnter","LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#HandleTriggerEnter","LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#TakeDamage","LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#IsDestroyed","LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#OnDestroyObstacle","LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#HandleDestroy","LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager#ctor","LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager#HandleObstacleEffect","LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager#Unsubscribe","LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager#ClearSubscribers","LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs#$ctor1","LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs#ctor","LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#Speed#get","LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#Speed#set","LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#WaitTime#get","LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#WaitTime#set","LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#init","LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#Start","LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#UpdatePatrol","LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#GetPointA","LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#GetPointB","LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#SetPoints","LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample#SetDamage","LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample#TakeCollision","LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample#init","LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample#Start","LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample#OnDestroy","LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample#HandleObstacleEffect","LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample#init","LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample#Update","LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample#Shoot","LGSDKBullet#Damage#get","LGSDKBullet#Damage#set","LGSDKBullet#MaxDistance#get","LGSDKBullet#MaxDistance#set","LGSDKBullet#FireRate#get","LGSDKBullet#FireRate#set","LGSDKBullet#init","LGSDKBullet#Start","LGSDKBullet#Update","LGSDKBullet#OnTriggerEnter","LGSDKCameraFollow#init","LGSDKCameraFollow#LateUpdate","LGSDKDamagePopup#init","LGSDKDamagePopup#SetDamage","LGSDKDamagePopup#LateUpdate","LGSDKEnemyBullet#init","LGSDKEnemyBullet#Init","LGSDKEnemyBullet#OnEnable","LGSDKEnemyBullet#OnDisable","LGSDKEnemyBullet#Start","LGSDKEnemyBullet#Update","LGSDKEnemyBullet#HandleFollowerHitEnemyBullet","LGSDKEnemyBullet#OnTriggerEnter","LGSDKEnemyConfig#init","LGSDKEnemyController#init","LGSDKEnemyController#Start","LGSDKEnemyController#TakeDamage","LGSDKEnemyController#UpdateHealthUI","LGSDKEnemyController#Die","LGSDKEnemyShooter#init","LGSDKEnemyShooter#Start","LGSDKEnemyShooter#Update","LGSDKEnemyShooter#Shoot","LGSDKEnemySpawner#init","LGSDKEnemySpawner#Start","LGSDKEnemySpawner#SpawnAllEnemies","LGSDKFlowerCharacterController#Damage#get","LGSDKFlowerCharacterController#Damage#set","LGSDKFlowerCharacterController#Level#get","LGSDKFlowerCharacterController#Level#set","LGSDKFlowerCharacterController#MaxDistance#get","LGSDKFlowerCharacterController#MaxDistance#set","LGSDKFlowerCharacterController#FireRate#get","LGSDKFlowerCharacterController#FireRate#set","LGSDKFlowerCharacterController#init","LGSDKFlowerCharacterController#Initialize","LGSDKFlowerCharacterController#start","LGSDKFlowerCharacterController#Update","LGSDKFlowerCharacterController#OnTriggerEnter","LGSDKFlowerCharacterController#Shoot","LGSDKHealthBarFollow#Start","LGSDKHealthBarFollow#LateUpdate","LGSDKKnockbackManager#init","LGSDKKnockbackManager#Register","LGSDKKnockbackManager#TriggerKnockback","LGSDKKnockbackManager#KnockbackCoroutine","LGSDKLeaderCharacterController#Level#get","LGSDKLeaderCharacterController#Level#set","LGSDKLeaderCharacterController#Damage#get","LGSDKLeaderCharacterController#Damage#set","LGSDKLeaderCharacterController#MaxDistance#get","LGSDKLeaderCharacterController#MaxDistance#set","LGSDKLeaderCharacterController#FireRate#get","LGSDKLeaderCharacterController#FireRate#set","LGSDKLeaderCharacterController#init","LGSDKLeaderCharacterController#Start","LGSDKLeaderCharacterController#Update","LGSDKLeaderCharacterController#HandleSwipeMovement","LGSDKLeaderCharacterController#Shoot","LGSDKLeaderCharacterController#OnTriggerEnter","LGSDKLeaderCharacterController#SpawnCustomFollowers","LGSDKLeaderCharacterController#AddNewFollower","LGSDKLeaderCharacterController#RemoveLastFollower","LGSDKLeaderCharacterController#GetFollowerCount","LGSDKLeaderCharacterController#UpgradeLevel","LGSDKLoot#init","LGSDKLoot#Start","LGSDKLoot#OnTriggerEnter","LGSDKLoot#HandleBulletCollision","LGSDKLoot#BreakNextBrick","LGSDKLoot#BreakBrick","LGSDKLoot#CountAllBricks","LGSDKWarriorPrison#Awake","LGSDKWarriorPrison#OnTriggerEnter","LGSDKWarriorPrison#HandleLeaderCharacterCollision","LGSDKWarriorPrison#HandleBulletCollision","LGSDKWarriorPrison#UpdateLevelBar","LGSDKWarriorPrison#LevelUp","LootCollector#init","LootCollector#OnEnable","LootCollector#OnDisable","LootCollector#HandleLootCharactorTrigger","LootCollector#HandleLootBulletTrigger","LootCollector#AddExperience","LootCollector#BreakNextBrick","LootCollector#BreakBrick","TMPForceLoader#LoadTMPSettings","TowerBrickController#init","TowerBrickController#BreakNextBrick","TowerBrickController#BreakBrick","TowerDamageHandler#init","TowerDamageHandler#Start","TowerDamageHandler#TakeDamage","TowerTestController#OnTriggerEnter","TowerTestController#SimulateKnifeHit","WarriorPrisonCollector#init","WarriorPrisonCollector#OnEnable","WarriorPrisonCollector#OnDisable","WarriorPrisonCollector#HandleWarriorPrisonCharactorTrigger","WarriorPrisonCollector#HandleWarriorPrisonBulletTrigger","WarriorPrisonCollector#UpdateLevelBar","WarriorPrisonCollector#LevelUp","WarriorPrisonCollector#ReleaseWarriors","WarriorPrisonCollector#GetWaypointsForWarrior","LGSDK.TimelineUp.Obstacles.LGSDKObstacleIdleBehavior#UpdateBehavior","LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock#InitializeObstacleType","LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock#Initialize","LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock#HandleDestroy","LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock#TakeDamage","LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock#UpdateHealthDisplay","LGSDK.TimelineUp.Obstacles.LGSDKObstacleRotatorBehavior#init","LGSDK.TimelineUp.Obstacles.LGSDKObstacleRotatorBehavior#UpdateBehavior","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw#init","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw#InitializeObstacleType","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw#Initialize","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw#HandleTriggerEnter","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior#init","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior#Start","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior#SetupPoints","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior#UpdateBehavior","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel#init","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel#InitializeObstacleType","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel#Initialize","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel#HandleDestroy","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel#TakeDamage","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel#UpdateHealthDisplay","LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade#Update","LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade#InitializeObstacleType","LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade#Initialize","LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade#HandleDestroy","LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade#TakeDamage","LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade#SetupHealthBar","LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade#UpdateHealthBar"]' ) ); }
/**
 * @version 1.0.9305.31900
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*BoxHealth start.*/
    Bridge.define("BoxHealth", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            health: 0,
            textMesh: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BoxHealth#init", this ); }

                this.health = 10;
            }
        },
        methods: {
            /*BoxHealth.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BoxHealth#Start", this ); }

                this.UpdateText();
            },
            /*BoxHealth.Start end.*/

            /*BoxHealth.TakeDamage start.*/
            TakeDamage: function (amount) {
if ( TRACE ) { TRACE( "BoxHealth#TakeDamage", this ); }

                this.health = (this.health - amount) | 0;
                this.UpdateText();

                if (this.health <= 0) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject); // huỷ thùng
                }
            },
            /*BoxHealth.TakeDamage end.*/

            /*BoxHealth.UpdateText start.*/
            UpdateText: function () {
if ( TRACE ) { TRACE( "BoxHealth#UpdateText", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.textMesh, null)) {
                    this.textMesh.text = Bridge.toString(this.health);
                }
            },
            /*BoxHealth.UpdateText end.*/

            /*BoxHealth.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "BoxHealth#OnCollisionEnter", this ); }

                if (collision.gameObject.CompareTag("Bullet")) {
                    this.TakeDamage(1); // mỗi viên bắn -1
                    UnityEngine.MonoBehaviour.Destroy(collision.gameObject); // huỷ đạn sau va chạm
                }
            },
            /*BoxHealth.OnCollisionEnter end.*/


        }
    });
    /*BoxHealth end.*/

    /*CoinCollector start.*/
    Bridge.define("CoinCollector", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            flySpeed: 0,
            totalCoins: 0,
            uiTarget: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CoinCollector#init", this ); }

                this.flySpeed = 1.0;
                this.totalCoins = 0;
            }
        },
        methods: {
            /*CoinCollector.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "CoinCollector#OnEnable", this ); }

                LegoSDK.Prop.LGSDKPropManager.addOnCoinTriggerEnter(Bridge.fn.cacheBind(this, this.HandleCoinCollected));
            },
            /*CoinCollector.OnEnable end.*/

            /*CoinCollector.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "CoinCollector#OnDisable", this ); }

                LegoSDK.Prop.LGSDKPropManager.removeOnCoinTriggerEnter(Bridge.fn.cacheBind(this, this.HandleCoinCollected));
            },
            /*CoinCollector.OnDisable end.*/

            /*CoinCollector.HandleCoinCollected start.*/
            HandleCoinCollected: function (data) {
if ( TRACE ) { TRACE( "CoinCollector#HandleCoinCollected", this ); }

                // Start moving coin object
                this.StartCoroutine$1(this.MoveCoinToUI(data.Coin));
                this.AddCoin(data.Value);
            },
            /*CoinCollector.HandleCoinCollected end.*/

            /*CoinCollector.MoveCoinToUI start.*/
            MoveCoinToUI: function (coin) {
if ( TRACE ) { TRACE( "CoinCollector#MoveCoinToUI", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    start,
                    uiRect,
                    canvas,
                    end,
                    screenPoint,
                    uiCamera,
                    screenPoint1,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    start = coin.transform.position.$clone();

                                        uiRect = this.uiTarget.GetComponent(UnityEngine.RectTransform);
                                        canvas = this.uiTarget.GetComponentInParent(UnityEngine.Canvas);
                                        end = new UnityEngine.Vector3();

                                        if (canvas.renderMode === UnityEngine.RenderMode.ScreenSpaceOverlay) {
                                            // Với Screen Space - Overlay
                                            screenPoint = UnityEngine.Vector3.FromVector2(UnityEngine.RectTransformUtility.WorldToScreenPoint(canvas.worldCamera, uiRect.position));
                                            end = UnityEngine.Camera.main.ScreenToWorldPoint(new pc.Vec3( screenPoint.x, screenPoint.y, UnityEngine.Camera.main.WorldToScreenPoint(start).z ));
                                        } else if (canvas.renderMode === UnityEngine.RenderMode.ScreenSpaceCamera) {
                                            // Với Screen Space - Camera
                                            uiCamera = UnityEngine.Component.op_Inequality(canvas.worldCamera, null) ? canvas.worldCamera : UnityEngine.Camera.main;
                                            screenPoint1 = UnityEngine.Vector3.FromVector2(UnityEngine.RectTransformUtility.WorldToScreenPoint(uiCamera, uiRect.position));
                                            end = UnityEngine.Camera.main.ScreenToWorldPoint(new pc.Vec3( screenPoint1.x, screenPoint1.y, UnityEngine.Camera.main.WorldToScreenPoint(start).z ));
                                        } else {
                                            // Với World Space Canvas  
                                            end = uiRect.position.$clone();
                                        }

                                        UnityEngine.Debug.Log$1(System.String.format("Start: {0}, End: {1}, Distance: {2}", start.$clone(), end.$clone(), Bridge.box(pc.Vec3.distance( start, end ), System.Single, System.Single.format, System.Single.getHashCode)));

                                        t = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( t < 1.0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    if (UnityEngine.GameObject.op_Equality(coin, null)) {
                                            $step = 4;
                                            continue;
                                        } // Safety check

                                        t += UnityEngine.Time.deltaTime * this.flySpeed;
                                        coin.transform.position = new pc.Vec3().lerp( start, end, t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    // Đảm bảo coin đến đúng vị trí cuối
                                        if (UnityEngine.GameObject.op_Inequality(coin, null)) {
                                            coin.transform.position = end.$clone();
                                            UnityEngine.MonoBehaviour.Destroy(coin);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CoinCollector.MoveCoinToUI end.*/

            /*CoinCollector.AddCoin start.*/
            AddCoin: function (amount) {
if ( TRACE ) { TRACE( "CoinCollector#AddCoin", this ); }

                this.totalCoins = (this.totalCoins + amount) | 0;
            },
            /*CoinCollector.AddCoin end.*/


        }
    });
    /*CoinCollector end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LegoSDK.Bullet.BulletEventData start.*/
    Bridge.define("LegoSDK.Bullet.BulletEventData", {
        fields: {
            Bullet: null,
            Target: null,
            Damage: 0,
            MaxDistance: 0,
            FireRate: 0
        }
    });
    /*LegoSDK.Bullet.BulletEventData end.*/

    /*LegoSDK.Bullet.LGSDKBulletManager start.*/
    Bridge.define("LegoSDK.Bullet.LGSDKBulletManager", {
        statics: {
            fields: {
                isSubscribed: false
            },
            events: {
                OnBulletTriggerEnter: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "LegoSDK.Bullet.LGSDKBulletManager#init", this ); }

                    this.isSubscribed = false;
                },
                ctor: function () {
if ( TRACE ) { TRACE( "LegoSDK.Bullet.LGSDKBulletManager#ctor", this ); }

                    if (!LegoSDK.Bullet.LGSDKBulletManager.isSubscribed) {
                        LGSDKBullet.addOnBulletTriggerEnter(LegoSDK.Bullet.LGSDKBulletManager.HandleBulletEventTriggered);
                        LegoSDK.Bullet.LGSDKBulletManager.isSubscribed = true;
                    }
                }
            },
            methods: {
                /*LegoSDK.Bullet.LGSDKBulletManager.HandleBulletEventTriggered:static start.*/
                HandleBulletEventTriggered: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.Bullet.LGSDKBulletManager#HandleBulletEventTriggered", this ); }

                    !Bridge.staticEquals(LegoSDK.Bullet.LGSDKBulletManager.OnBulletTriggerEnter, null) ? LegoSDK.Bullet.LGSDKBulletManager.OnBulletTriggerEnter(data) : null;
                },
                /*LegoSDK.Bullet.LGSDKBulletManager.HandleBulletEventTriggered:static end.*/

                /*LegoSDK.Bullet.LGSDKBulletManager.Unsubscribe:static start.*/
                Unsubscribe: function () {
if ( TRACE ) { TRACE( "LegoSDK.Bullet.LGSDKBulletManager#Unsubscribe", this ); }

                    if (LegoSDK.Bullet.LGSDKBulletManager.isSubscribed) {
                        LGSDKBullet.removeOnBulletTriggerEnter(LegoSDK.Bullet.LGSDKBulletManager.HandleBulletEventTriggered);
                        LegoSDK.Bullet.LGSDKBulletManager.isSubscribed = false;
                    }
                },
                /*LegoSDK.Bullet.LGSDKBulletManager.Unsubscribe:static end.*/

                /*LegoSDK.Bullet.LGSDKBulletManager.ClearSubscribers:static start.*/
                ClearSubscribers: function () {
if ( TRACE ) { TRACE( "LegoSDK.Bullet.LGSDKBulletManager#ClearSubscribers", this ); }

                    LegoSDK.Bullet.LGSDKBulletManager.OnBulletTriggerEnter = null;
                },
                /*LegoSDK.Bullet.LGSDKBulletManager.ClearSubscribers:static end.*/


            }
        }
    });
    /*LegoSDK.Bullet.LGSDKBulletManager end.*/

    /*LegoSDK.Follower.FollowerEventData start.*/
    Bridge.define("LegoSDK.Follower.FollowerEventData", {
        fields: {
            Follower: null,
            Target: null
        }
    });
    /*LegoSDK.Follower.FollowerEventData end.*/

    /*LegoSDK.Follower.LGSDKFollowerManager start.*/
    Bridge.define("LegoSDK.Follower.LGSDKFollowerManager", {
        statics: {
            fields: {
                isSubscribed: false
            },
            events: {
                OnFollowerTriggerEnter: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "LegoSDK.Follower.LGSDKFollowerManager#init", this ); }

                    this.isSubscribed = false;
                },
                ctor: function () {
if ( TRACE ) { TRACE( "LegoSDK.Follower.LGSDKFollowerManager#ctor", this ); }

                    if (!LegoSDK.Follower.LGSDKFollowerManager.isSubscribed) {
                        LGSDKFlowerCharacterController.addOnFollowerTriggerEnter(LegoSDK.Follower.LGSDKFollowerManager.HandleFollowerEventTriggered);
                        LegoSDK.Follower.LGSDKFollowerManager.isSubscribed = true;
                    }
                }
            },
            methods: {
                /*LegoSDK.Follower.LGSDKFollowerManager.HandleFollowerEventTriggered:static start.*/
                HandleFollowerEventTriggered: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.Follower.LGSDKFollowerManager#HandleFollowerEventTriggered", this ); }

                    !Bridge.staticEquals(LegoSDK.Follower.LGSDKFollowerManager.OnFollowerTriggerEnter, null) ? LegoSDK.Follower.LGSDKFollowerManager.OnFollowerTriggerEnter(data) : null;
                },
                /*LegoSDK.Follower.LGSDKFollowerManager.HandleFollowerEventTriggered:static end.*/

                /*LegoSDK.Follower.LGSDKFollowerManager.Unsubscribe:static start.*/
                Unsubscribe: function () {
if ( TRACE ) { TRACE( "LegoSDK.Follower.LGSDKFollowerManager#Unsubscribe", this ); }

                    if (LegoSDK.Follower.LGSDKFollowerManager.isSubscribed) {
                        LGSDKFlowerCharacterController.removeOnFollowerTriggerEnter(LegoSDK.Follower.LGSDKFollowerManager.HandleFollowerEventTriggered);
                        LegoSDK.Follower.LGSDKFollowerManager.isSubscribed = false;
                    }
                },
                /*LegoSDK.Follower.LGSDKFollowerManager.Unsubscribe:static end.*/

                /*LegoSDK.Follower.LGSDKFollowerManager.ClearSubscribers:static start.*/
                ClearSubscribers: function () {
if ( TRACE ) { TRACE( "LegoSDK.Follower.LGSDKFollowerManager#ClearSubscribers", this ); }

                    LegoSDK.Follower.LGSDKFollowerManager.OnFollowerTriggerEnter = null;
                },
                /*LegoSDK.Follower.LGSDKFollowerManager.ClearSubscribers:static end.*/


            }
        }
    });
    /*LegoSDK.Follower.LGSDKFollowerManager end.*/

    /*LegoSDK.FollowerDataGroup.FollowerInfo start.*/
    Bridge.define("LegoSDK.FollowerDataGroup.FollowerInfo", {
        fields: {
            level: 0,
            damage: 0,
            maxDistance: 0,
            fireRate: 0,
            bulletPrefab: null
        }
    });
    /*LegoSDK.FollowerDataGroup.FollowerInfo end.*/

    /*LegoSDK.FollowerDataGroup.LGSDKFollowerDataGroup start.*/
    Bridge.define("LegoSDK.FollowerDataGroup.LGSDKFollowerDataGroup", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            followers: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LegoSDK.FollowerDataGroup.LGSDKFollowerDataGroup#init", this ); }

                this.followers = new (System.Collections.Generic.List$1(LegoSDK.FollowerDataGroup.FollowerInfo)).ctor();
            }
        }
    });
    /*LegoSDK.FollowerDataGroup.LGSDKFollowerDataGroup end.*/

    /*LegoSDK.FollowerInitialInfo.LGSDKFollowerInitialInfo start.*/
    Bridge.define("LegoSDK.FollowerInitialInfo.LGSDKFollowerInitialInfo", {
        fields: {
            level: 0,
            damage: 0,
            maxDistance: 0,
            fireRate: 0,
            bulletPrefab: null,
            Warrior: null
        }
    });
    /*LegoSDK.FollowerInitialInfo.LGSDKFollowerInitialInfo end.*/

    /*LegoSDK.Leader.LeaderEventData start.*/
    Bridge.define("LegoSDK.Leader.LeaderEventData", {
        fields: {
            Leader: null,
            Target: null
        }
    });
    /*LegoSDK.Leader.LeaderEventData end.*/

    /*LegoSDK.Leader.LGSDKLeaderManager start.*/
    Bridge.define("LegoSDK.Leader.LGSDKLeaderManager", {
        statics: {
            fields: {
                isSubscribed: false
            },
            events: {
                OnLeaderTriggerEnter: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "LegoSDK.Leader.LGSDKLeaderManager#init", this ); }

                    this.isSubscribed = false;
                },
                ctor: function () {
if ( TRACE ) { TRACE( "LegoSDK.Leader.LGSDKLeaderManager#ctor", this ); }

                    if (!LegoSDK.Leader.LGSDKLeaderManager.isSubscribed) {
                        LGSDKLeaderCharacterController.addOnLeaderTriggerEnter(LegoSDK.Leader.LGSDKLeaderManager.HandleLeaderEventTriggered);
                        LegoSDK.Leader.LGSDKLeaderManager.isSubscribed = true;
                    }
                }
            },
            methods: {
                /*LegoSDK.Leader.LGSDKLeaderManager.HandleLeaderEventTriggered:static start.*/
                HandleLeaderEventTriggered: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.Leader.LGSDKLeaderManager#HandleLeaderEventTriggered", this ); }

                    !Bridge.staticEquals(LegoSDK.Leader.LGSDKLeaderManager.OnLeaderTriggerEnter, null) ? LegoSDK.Leader.LGSDKLeaderManager.OnLeaderTriggerEnter(data) : null;
                },
                /*LegoSDK.Leader.LGSDKLeaderManager.HandleLeaderEventTriggered:static end.*/

                /*LegoSDK.Leader.LGSDKLeaderManager.Unsubscribe:static start.*/
                Unsubscribe: function () {
if ( TRACE ) { TRACE( "LegoSDK.Leader.LGSDKLeaderManager#Unsubscribe", this ); }

                    if (LegoSDK.Leader.LGSDKLeaderManager.isSubscribed) {
                        LGSDKLeaderCharacterController.removeOnLeaderTriggerEnter(LegoSDK.Leader.LGSDKLeaderManager.HandleLeaderEventTriggered);
                        LegoSDK.Leader.LGSDKLeaderManager.isSubscribed = false;
                    }
                },
                /*LegoSDK.Leader.LGSDKLeaderManager.Unsubscribe:static end.*/

                /*LegoSDK.Leader.LGSDKLeaderManager.ClearSubscribers:static start.*/
                ClearSubscribers: function () {
if ( TRACE ) { TRACE( "LegoSDK.Leader.LGSDKLeaderManager#ClearSubscribers", this ); }

                    LegoSDK.Leader.LGSDKLeaderManager.OnLeaderTriggerEnter = null;
                },
                /*LegoSDK.Leader.LGSDKLeaderManager.ClearSubscribers:static end.*/


            }
        }
    });
    /*LegoSDK.Leader.LGSDKLeaderManager end.*/

    /*LegoSDK.Prop.LGSDKCoinEventData start.*/
    Bridge.define("LegoSDK.Prop.LGSDKCoinEventData", {
        fields: {
            CoinCollector: null,
            Coin: null,
            Target: null,
            Value: 0
        }
    });
    /*LegoSDK.Prop.LGSDKCoinEventData end.*/

    /*LegoSDK.Prop.LGSDKGoldCoin start.*/
    Bridge.define("LegoSDK.Prop.LGSDKGoldCoin", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*LegoSDK.Prop.LGSDKGoldCoin.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LegoSDK.Prop.LGSDKGoldCoin#Start", this ); }


            },
            /*LegoSDK.Prop.LGSDKGoldCoin.Start end.*/

            /*LegoSDK.Prop.LGSDKGoldCoin.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LegoSDK.Prop.LGSDKGoldCoin#Update", this ); }


            },
            /*LegoSDK.Prop.LGSDKGoldCoin.Update end.*/

            /*LegoSDK.Prop.LGSDKGoldCoin.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "LegoSDK.Prop.LGSDKGoldCoin#OnTriggerEnter", this ); }

                var $t;
                if (other.CompareTag("LeaderCharacter")) {
                    var data = ($t = new LegoSDK.Prop.LGSDKCoinEventData(), $t.Coin = this.gameObject, $t.Target = other.gameObject, $t.Value = 1, $t);
                    LegoSDK.Prop.LGSDKPropManager.TriggerCoinEnter(data);
                }
            },
            /*LegoSDK.Prop.LGSDKGoldCoin.OnTriggerEnter end.*/


        }
    });
    /*LegoSDK.Prop.LGSDKGoldCoin end.*/

    /*LegoSDK.Prop.LGSDKLootEventData start.*/
    Bridge.define("LegoSDK.Prop.LGSDKLootEventData", {
        fields: {
            Loot: null,
            Target: null,
            DamePopup: null,
            HitPoint: null,
            Layers: null,
            Experience: 0
        }
    });
    /*LegoSDK.Prop.LGSDKLootEventData end.*/

    /*LegoSDK.Prop.LGSDKPropManager start.*/
    Bridge.define("LegoSDK.Prop.LGSDKPropManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                OnCoinTriggerEnter: null,
                OnLootTriggerCharactorEnter: null,
                OnLootTriggerBulletEnter: null,
                OnWarriorPrisonTriggerBulletEnter: null,
                OnWarriorPrisonTriggerCharactorEnter: null,
                OnWarriorTriggerEnter: null
            },
            methods: {
                /*LegoSDK.Prop.LGSDKPropManager.TriggerCoinEnter:static start.*/
                TriggerCoinEnter: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.Prop.LGSDKPropManager#TriggerCoinEnter", this ); }

                    !Bridge.staticEquals(LegoSDK.Prop.LGSDKPropManager.OnCoinTriggerEnter, null) ? LegoSDK.Prop.LGSDKPropManager.OnCoinTriggerEnter(data) : null;
                },
                /*LegoSDK.Prop.LGSDKPropManager.TriggerCoinEnter:static end.*/

                /*LegoSDK.Prop.LGSDKPropManager.TriggerLootCharactorEnter:static start.*/
                TriggerLootCharactorEnter: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.Prop.LGSDKPropManager#TriggerLootCharactorEnter", this ); }

                    !Bridge.staticEquals(LegoSDK.Prop.LGSDKPropManager.OnLootTriggerCharactorEnter, null) ? LegoSDK.Prop.LGSDKPropManager.OnLootTriggerCharactorEnter(data) : null;
                },
                /*LegoSDK.Prop.LGSDKPropManager.TriggerLootCharactorEnter:static end.*/

                /*LegoSDK.Prop.LGSDKPropManager.TriggerLootBulletEnter:static start.*/
                TriggerLootBulletEnter: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.Prop.LGSDKPropManager#TriggerLootBulletEnter", this ); }

                    !Bridge.staticEquals(LegoSDK.Prop.LGSDKPropManager.OnLootTriggerBulletEnter, null) ? LegoSDK.Prop.LGSDKPropManager.OnLootTriggerBulletEnter(data) : null;
                },
                /*LegoSDK.Prop.LGSDKPropManager.TriggerLootBulletEnter:static end.*/

                /*LegoSDK.Prop.LGSDKPropManager.TriggerWarriorPrisonBulletEnter:static start.*/
                TriggerWarriorPrisonBulletEnter: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.Prop.LGSDKPropManager#TriggerWarriorPrisonBulletEnter", this ); }

                    !Bridge.staticEquals(LegoSDK.Prop.LGSDKPropManager.OnWarriorPrisonTriggerBulletEnter, null) ? LegoSDK.Prop.LGSDKPropManager.OnWarriorPrisonTriggerBulletEnter(data) : null;
                },
                /*LegoSDK.Prop.LGSDKPropManager.TriggerWarriorPrisonBulletEnter:static end.*/

                /*LegoSDK.Prop.LGSDKPropManager.TriggerWarriorPrisonCharactorEnter:static start.*/
                TriggerWarriorPrisonCharactorEnter: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.Prop.LGSDKPropManager#TriggerWarriorPrisonCharactorEnter", this ); }

                    !Bridge.staticEquals(LegoSDK.Prop.LGSDKPropManager.OnWarriorPrisonTriggerCharactorEnter, null) ? LegoSDK.Prop.LGSDKPropManager.OnWarriorPrisonTriggerCharactorEnter(data) : null;
                },
                /*LegoSDK.Prop.LGSDKPropManager.TriggerWarriorPrisonCharactorEnter:static end.*/

                /*LegoSDK.Prop.LGSDKPropManager.TriggerWarriorEnter:static start.*/
                TriggerWarriorEnter: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.Prop.LGSDKPropManager#TriggerWarriorEnter", this ); }

                    !Bridge.staticEquals(LegoSDK.Prop.LGSDKPropManager.OnWarriorTriggerEnter, null) ? LegoSDK.Prop.LGSDKPropManager.OnWarriorTriggerEnter(data) : null;
                },
                /*LegoSDK.Prop.LGSDKPropManager.TriggerWarriorEnter:static end.*/


            }
        }
    });
    /*LegoSDK.Prop.LGSDKPropManager end.*/

    /*LegoSDK.Prop.LGSDKWarrior start.*/
    Bridge.define("LegoSDK.Prop.LGSDKWarrior", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            waypointGroup: null,
            currentWaypointIndex: 0,
            waypoints: null,
            moveSpeed: 0,
            isMovePoint: false,
            level: 0,
            damage: 0,
            maxDistance: 0,
            fireRate: 0,
            bulletPrefab: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LegoSDK.Prop.LGSDKWarrior#init", this ); }

                this.currentWaypointIndex = 0;
                this.isMovePoint = false;
            }
        },
        methods: {
            /*LegoSDK.Prop.LGSDKWarrior.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LegoSDK.Prop.LGSDKWarrior#Start", this ); }

                if (UnityEngine.Component.op_Equality(this.waypointGroup, null)) {
                    UnityEngine.Debug.LogError$2("Ch\u01b0a g\u00e1n waypointGroup!");
                    return;
                }

                // Lấy tất cả các child trong waypointGroup (trừ chính nó)
                this.waypoints = System.Linq.Enumerable.from(this.waypointGroup.GetComponentsInChildren(UnityEngine.Transform), UnityEngine.Transform).where(Bridge.fn.bind(this, function (t) {
                        return UnityEngine.Component.op_Inequality(t, this.waypointGroup);
                    })).ToArray(UnityEngine.Transform);
            },
            /*LegoSDK.Prop.LGSDKWarrior.Start end.*/

            /*LegoSDK.Prop.LGSDKWarrior.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LegoSDK.Prop.LGSDKWarrior#Update", this ); }

                if (!this.isMovePoint || this.waypoints == null || this.currentWaypointIndex >= this.waypoints.length) {
                    return;
                }

                var target = this.waypoints[this.currentWaypointIndex];

                this.transform.position = pc.Vec3.moveTowards( this.transform.position, target.position, this.moveSpeed * UnityEngine.Time.deltaTime );

                if (pc.Vec3.distance( this.transform.position, target.position ) < 0.2) {
                    this.currentWaypointIndex = (this.currentWaypointIndex + 1) | 0;
                }
            },
            /*LegoSDK.Prop.LGSDKWarrior.Update end.*/

            /*LegoSDK.Prop.LGSDKWarrior.LevelUp start.*/
            LevelUp: function () {
if ( TRACE ) { TRACE( "LegoSDK.Prop.LGSDKWarrior#LevelUp", this ); }

                this.level = (this.level + 1) | 0;
            },
            /*LegoSDK.Prop.LGSDKWarrior.LevelUp end.*/

            /*LegoSDK.Prop.LGSDKWarrior.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "LegoSDK.Prop.LGSDKWarrior#OnTriggerEnter", this ); }

                var $t;
                if (other.CompareTag("LGSDK_SumonerGate")) {

                    var data = ($t = new LegoSDK.Prop.LGSDKWarriorEventData(), $t.Warrior = this.gameObject, $t.Target = other.gameObject, $t.damage = this.damage, $t.Level = this.level, $t.maxDistance = this.maxDistance, $t.fireRate = this.fireRate, $t.bulletPrefab = this.bulletPrefab, $t);

                    LegoSDK.Prop.LGSDKPropManager.TriggerWarriorEnter(data);
                }
            },
            /*LegoSDK.Prop.LGSDKWarrior.OnTriggerEnter end.*/

            /*LegoSDK.Prop.LGSDKWarrior.ReleaseWarrior start.*/
            ReleaseWarrior: function () {
if ( TRACE ) { TRACE( "LegoSDK.Prop.LGSDKWarrior#ReleaseWarrior", this ); }

                UnityEngine.Debug.Log$1("waypoints length: " + this.waypoints.length);
                this.isMovePoint = true;
            },
            /*LegoSDK.Prop.LGSDKWarrior.ReleaseWarrior end.*/


        }
    });
    /*LegoSDK.Prop.LGSDKWarrior end.*/

    /*LegoSDK.Prop.LGSDKWarriorEventData start.*/
    Bridge.define("LegoSDK.Prop.LGSDKWarriorEventData", {
        fields: {
            Warrior: null,
            Target: null,
            ReleasePositions: null,
            Level: 0,
            damage: 0,
            maxDistance: 0,
            fireRate: 0,
            bulletPrefab: null
        }
    });
    /*LegoSDK.Prop.LGSDKWarriorEventData end.*/

    /*LegoSDK.Prop.LGSDKWarriorPrisonEventData start.*/
    Bridge.define("LegoSDK.Prop.LGSDKWarriorPrisonEventData", {
        fields: {
            Prison: null,
            Target: null,
            Warriors: null,
            ReleasePositions: null,
            Level: 0
        }
    });
    /*LegoSDK.Prop.LGSDKWarriorPrisonEventData end.*/

    /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample start.*/
    /** @namespace LegoSDK.TimelineUpMechanic */

    /**
     * @public
     * @class LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            },
            props: {
                /**
                 * @static
                 * @public
                 * @readonly
                 * @memberof LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample
                 * @function Instance
                 * @type LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample
                 */
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#Instance#get", this ); }

                        return LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.instance;
                    }
                }
            }
        },
        methods: {
            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.Awake start.*/
            /**
             * @instance
             * @private
             * @this LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample
             * @memberof LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample
             * @return  {void}
             */
            Awake: function () {
if ( TRACE ) { TRACE( "LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#Awake", this ); }

                // Kiểm tra nếu đã có instance khác tồn tại
                if (UnityEngine.MonoBehaviour.op_Inequality(LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.instance, null) && UnityEngine.MonoBehaviour.op_Inequality(LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.instance, this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    return;
                }
                // Lưu instance hiện tại
                LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.instance = this;
                // Giữ GameObject này không bị destroy khi chuyển scene
                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);

                LegoSDK.Leader.LGSDKLeaderManager.addOnLeaderTriggerEnter(Bridge.fn.cacheBind(this, this.HandleLeaderCollision));
                LegoSDK.Bullet.LGSDKBulletManager.addOnBulletTriggerEnter(Bridge.fn.cacheBind(this, this.HandleBulletCollision));
                LegoSDK.Follower.LGSDKFollowerManager.addOnFollowerTriggerEnter(Bridge.fn.cacheBind(this, this.HandleFollowerCollision));
                LegoTimelineUpMechanic.Gate.LGSDKSingGateManager.addOnFireRateTriggerEnter(Bridge.fn.cacheBind(this, this.HandleFireRateGateCollision));
                LegoTimelineUpMechanic.Gate.LGSDKSingGateManager.addOnAtkRangeTriggerEnter(Bridge.fn.cacheBind(this, this.HandleAtkRangeGateCollision));
                // Đăng ký lắng nghe sự kiện va chạm vs AtkRange gate
                LegoTimelineUpMechanic.Gate.LGSDKSingGateManager.addOnAtkRangeTriggerEnter(Bridge.fn.cacheBind(this, this.HandleAtkRangeGateCollision));
                LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager.addOnSumonerCollisionTriggerEnter(Bridge.fn.cacheBind(this, this.HandleSumonerCollision));

                // Lắng nghe các sự kiện Props.
                LegoSDK.Prop.LGSDKPropManager.addOnCoinTriggerEnter(Bridge.fn.cacheBind(this, this.HandleCoinCollected));
                LegoSDK.Prop.LGSDKPropManager.addOnWarriorTriggerEnter(Bridge.fn.cacheBind(this, this.HandleWarriorCollision));
            },
            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.Awake end.*/

            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#OnDestroy", this ); }

                LegoSDK.Bullet.LGSDKBulletManager.removeOnBulletTriggerEnter(Bridge.fn.cacheBind(this, this.HandleBulletCollision));
                LegoSDK.Follower.LGSDKFollowerManager.removeOnFollowerTriggerEnter(Bridge.fn.cacheBind(this, this.HandleFollowerCollision));
                LegoSDK.Leader.LGSDKLeaderManager.removeOnLeaderTriggerEnter(Bridge.fn.cacheBind(this, this.HandleLeaderCollision));
                LegoTimelineUpMechanic.Gate.LGSDKSingGateManager.removeOnFireRateTriggerEnter(Bridge.fn.cacheBind(this, this.HandleFireRateGateCollision));
                LegoTimelineUpMechanic.Gate.LGSDKSingGateManager.removeOnAtkRangeTriggerEnter(Bridge.fn.cacheBind(this, this.HandleAtkRangeGateCollision));
                LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager.removeOnSumonerCollisionTriggerEnter(Bridge.fn.cacheBind(this, this.HandleSumonerCollision));

                LegoSDK.Prop.LGSDKPropManager.removeOnCoinTriggerEnter(Bridge.fn.cacheBind(this, this.HandleCoinCollected));
                LegoSDK.Prop.LGSDKPropManager.removeOnWarriorTriggerEnter(Bridge.fn.cacheBind(this, this.HandleWarriorCollision));

            },
            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.OnDestroy end.*/

            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleLeaderCollision start.*/
            /**
             * @instance
             * @private
             * @this LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample
             * @memberof LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample
             * @param   {LegoSDK.Leader.LeaderEventData}    data
             * @return  {void}
             */
            HandleLeaderCollision: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleLeaderCollision", this ); }

                var $t, $t1;
                if (UnityEngine.GameObject.op_Equality(data.Target, null)) {
                    return;
                }

                var enemy = data.Target.GetComponent(LGSDKEnemyController);
                var groupFollowerData = data.Target.GetComponent(LegoSDK.FollowerDataGroup.LGSDKFollowerDataGroup);

                if (UnityEngine.MonoBehaviour.op_Inequality(enemy, null)) {
                    UnityEngine.MonoBehaviour.Destroy(data.Target.gameObject);
                } // xóa enemy khi va chạm với follower

                if (UnityEngine.MonoBehaviour.op_Inequality(groupFollowerData, null)) {
                    var leaderController = data.Leader.GetComponent(LGSDKLeaderCharacterController);
                    if (UnityEngine.MonoBehaviour.op_Inequality(leaderController, null)) {
                        $t = Bridge.getEnumerator(groupFollowerData.followers);
                        try {
                            while ($t.moveNext()) {
                                var info = $t.Current;
                                leaderController.SpawnCustomFollowers(info.level, info.damage, info.maxDistance, info.fireRate, null);
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                        UnityEngine.MonoBehaviour.Destroy(data.Target.gameObject);
                    }
                }
                if (Bridge.referenceEquals(data.Target.tag, "Saw")) {
                    LGSDKKnockbackManager.TriggerKnockback();
                }

                // Va chạm với coin.
                var goldCoinComponent = data.Target.GetComponent(LegoSDK.Prop.LGSDKGoldCoin);

                if (UnityEngine.MonoBehaviour.op_Inequality(goldCoinComponent, null)) {
                    var coin = data.Target;
                    UnityEngine.Debug.Log$1(System.String.format("coin: {0}", [coin]));
                    var parentTransform = coin.transform.parent;
                    var coinGroupObject = parentTransform.gameObject;
                    var coinGroup = coinGroupObject.GetComponent(CoinCollector);

                    // Start moving coin object
                    coinGroup.StartCoroutine$1(coinGroup.MoveCoinToUI(coin));
                    coinGroup.AddCoin(1);
                }

                // Va chạm với Loot.
                var lootComponent = data.Target.GetComponent(LGSDKLoot);
                if (UnityEngine.MonoBehaviour.op_Inequality(lootComponent, null)) {
                    UnityEngine.MonoBehaviour.Destroy(data.Target.gameObject);
                }

                // Va chạm với Warrior prision.
                var warriorPrision = data.Target.GetComponent(LGSDKWarriorPrison);
                if (UnityEngine.MonoBehaviour.op_Inequality(warriorPrision, null)) {
                    warriorPrision.HandleLeaderCharacterCollision(data.Leader);
                }

                var box = data.Target.GetComponent(BoxHealth);
                if (UnityEngine.MonoBehaviour.op_Inequality(box, null)) {
                    // Tìm tất cả follower còn sống
                    var followers = UnityEngine.Object.FindObjectsOfType(LGSDKFlowerCharacterController);
                    if (followers.length > 0) {
                        // Destroy toàn bộ follower
                        $t1 = Bridge.getEnumerator(followers);
                        try {
                            while ($t1.moveNext()) {
                                var follower = $t1.Current;
                                UnityEngine.MonoBehaviour.Destroy(follower.gameObject);
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                        UnityEngine.Debug.Log$1("Leader va v\u00e0o box: \u0110\u00e3 ti\u00eau di\u1ec7t to\u00e0n b\u1ed9 follower!");
                    } else {
                        // Không còn follower, game over
                        UnityEngine.Debug.Log$1("Game Over: Leader va v\u00e0o box v\u00e0 kh\u00f4ng c\u00f2n follower!");
                        // Gọi hàm hiển thị Game Over UI ở đây, ví dụ:
                        // GameOverUI.Show();
                    }
                    UnityEngine.Time.timeScale = 0.0;

                    return;
                }
            },
            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleLeaderCollision end.*/

            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleBulletCollision start.*/
            HandleBulletCollision: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleBulletCollision", this ); }

                var $t;
                if (UnityEngine.GameObject.op_Equality(data.Target, null)) {
                    return;
                }

                var enemy = data.Target.GetComponent(LGSDKEnemyController);
                if (UnityEngine.MonoBehaviour.op_Inequality(enemy, null)) {
                    enemy.TakeDamage(data.Damage);
                    UnityEngine.MonoBehaviour.Destroy(data.Bullet);
                }

                this.HandleBulletWithSingleGateCollision(data);

                // Va chạm với Loot.
                var lootComponent = data.Target.GetComponent(LGSDKLoot);
                if (UnityEngine.MonoBehaviour.op_Inequality(lootComponent, null)) {
                    var hitPoint = null;
                    $t = Bridge.getEnumerator(data.Target.transform);
                    try {
                        while ($t.moveNext()) {
                            var child = Bridge.cast($t.Current, UnityEngine.Transform);
                            if (child.CompareTag("HitPoint")) {
                                UnityEngine.Debug.Log$1("HitPoint found: " + (child.name || ""));
                                hitPoint = child;
                                break;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    if (UnityEngine.Component.op_Inequality(hitPoint, null)) {
                        lootComponent.HandleBulletCollision(data.Bullet, hitPoint);
                    }
                }

                // Va chạm Bullet với Warrior prision.
                var warriorPrision = data.Target.GetComponent(LGSDKWarriorPrison);
                if (UnityEngine.MonoBehaviour.op_Inequality(warriorPrision, null)) {
                    warriorPrision.HandleBulletCollision(data.Bullet);
                }
                // Va chạm với Thùng
                UnityEngine.Debug.Log$1("Bullet collided with: " + (data.Target.name || ""));
                var box = data.Target.GetComponent(BoxHealth);
                if (UnityEngine.MonoBehaviour.op_Inequality(box, null)) {
                    box.TakeDamage(Bridge.Int.clip32(data.Damage));
                    UnityEngine.MonoBehaviour.Destroy(data.Bullet);
                }
            },
            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleBulletCollision end.*/

            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleBulletWithSingleGateCollision start.*/
            HandleBulletWithSingleGateCollision: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleBulletWithSingleGateCollision", this ); }

                if (UnityEngine.GameObject.op_Equality(data.Target, null) || data.Target.tag == null) {
                    return;
                }

                if (data.Target.tag == null) {
                    return;
                }

                UnityEngine.Debug.Log$1("Bullet collided with LGSDK_SingGate_FireRate: " + (data.Target.tag || ""));

                if (Bridge.referenceEquals(data.Target.tag, "LGSDK_SingGate_FireRate")) {
                    var SingleGateFireRate = data.Target.GetComponent(LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior);
                    if (UnityEngine.MonoBehaviour.op_Inequality(SingleGateFireRate, null)) {
                        if (SingleGateFireRate.IsHiddenDamage()) {
                            SingleGateFireRate.incrementFireRate(data.Damage);
                        } else {
                            SingleGateFireRate.TakeDamage(data.Damage);
                        }
                    }
                }

                if (Bridge.referenceEquals(data.Target.tag, "LGSDK_SingGate_AtkRange")) {
                    var SingleGateAtkRange = data.Target.GetComponent(LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior);
                    if (UnityEngine.MonoBehaviour.op_Inequality(SingleGateAtkRange, null)) {
                        if (SingleGateAtkRange.IsHiddenDamage()) {
                            SingleGateAtkRange.incrementAtkRange(data.MaxDistance);
                        } else {
                            SingleGateAtkRange.TakeDamage(data.Damage);
                        }
                    }
                }
            },
            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleBulletWithSingleGateCollision end.*/

            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleFollowerCollision start.*/
            HandleFollowerCollision: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleFollowerCollision", this ); }

                if (UnityEngine.GameObject.op_Equality(data.Target, null)) {
                    return;
                }
                var enemy = data.Target.GetComponent(LGSDKEnemyController);
                if (UnityEngine.MonoBehaviour.op_Inequality(enemy, null)) {
                    UnityEngine.MonoBehaviour.Destroy(data.Target.gameObject);
                }
                if (Bridge.referenceEquals(data.Target.tag, "Saw")) {
                    LGSDKKnockbackManager.TriggerKnockback();
                }

                var box = data.Target.GetComponent(BoxHealth);
                if (UnityEngine.MonoBehaviour.op_Inequality(box, null)) {
                    if (UnityEngine.GameObject.op_Inequality(data.Follower, null)) {
                        UnityEngine.MonoBehaviour.Destroy(data.Follower);
                    }
                    return;
                }
            },
            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleFollowerCollision end.*/

            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleFireRateGateCollision start.*/
            HandleFireRateGateCollision: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleFireRateGateCollision", this ); }

                this.IncreaseFireRateOrDamage(data, "FireRate");
            },
            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleFireRateGateCollision end.*/

            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleAtkRangeGateCollision start.*/
            HandleAtkRangeGateCollision: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleAtkRangeGateCollision", this ); }

                this.IncreaseFireRateOrDamage(data, "AtkRange");
            },
            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleAtkRangeGateCollision end.*/

            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.IncreaseFireRateOrDamage start.*/
            IncreaseFireRateOrDamage: function (data, targetProperty) {
if ( TRACE ) { TRACE( "LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#IncreaseFireRateOrDamage", this ); }

                if (UnityEngine.GameObject.op_Equality(data.Target, null)) {
                    return;
                }

                var leader = data.Target.GetComponent(LGSDKLeaderCharacterController);
                var follower = data.Target.GetComponent(LGSDKFlowerCharacterController);

                if (UnityEngine.MonoBehaviour.op_Inequality(leader, null)) {
                    if (!data.IsHiddenDamage) {
                        LGSDKKnockbackManager.TriggerKnockback();
                    } else {
                        if (Bridge.referenceEquals(targetProperty, "FireRate")) {
                            leader.FireRate += data.FireRate;
                        } else {
                            if (Bridge.referenceEquals(targetProperty, "AtkRange")) {
                                leader.Damage += data.AtkRange;
                            }
                        }
                        UnityEngine.MonoBehaviour.Destroy(data.SingleGate);
                    }
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(follower, null)) {
                    if (!data.IsHiddenDamage) {
                        LGSDKKnockbackManager.TriggerKnockback();
                    } else {
                        if (Bridge.referenceEquals(targetProperty, "FireRate")) {
                            follower.FireRate += data.FireRate;
                        } else {
                            if (Bridge.referenceEquals(targetProperty, "AtkRange")) {
                                follower.Damage += data.AtkRange;
                            }
                        }
                        UnityEngine.MonoBehaviour.Destroy(data.SingleGate);
                    }
                }
            },
            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.IncreaseFireRateOrDamage end.*/

            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleSumonerCollision start.*/
            HandleSumonerCollision: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleSumonerCollision", this ); }

                var $t;
                if (UnityEngine.GameObject.op_Equality(data.Target, null)) {
                    return;
                }
                var leader = data.Target.GetComponent(LGSDKLeaderCharacterController);
                if (UnityEngine.MonoBehaviour.op_Inequality(leader, null)) {
                    var followerInfoObject = data.FollowerInfo;
                    var storedFollowers;
                    if (followerInfoObject != null && ((storedFollowers = Bridge.as(followerInfoObject, System.Collections.Generic.List$1(LegoSDK.FollowerInitialInfo.LGSDKFollowerInitialInfo)))) != null) {
                        $t = Bridge.getEnumerator(storedFollowers);
                        try {
                            while ($t.moveNext()) {
                                var followerInfo = $t.Current;
                                leader.SpawnCustomFollowers(followerInfo.level, followerInfo.damage, followerInfo.maxDistance, followerInfo.fireRate, null);
                                UnityEngine.MonoBehaviour.Destroy(followerInfo.Warrior); // ẩn follower
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }

                    UnityEngine.MonoBehaviour.Destroy(data.SumonerGate); // ẩn cả cổng
                }

            },
            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleSumonerCollision end.*/

            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.SetFollowerInfo start.*/
            SetFollowerInfo: function (SumonerGate, follower) {
if ( TRACE ) { TRACE( "LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#SetFollowerInfo", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(SumonerGate, null) || follower == null) {
                    return; // Không làm gì nếu component không tồn tại hoặc danh sách truyền vào rỗng
                }

                // Lấy followerInfo hiện tại từ SumonerGate
                var currentFollowerInfo = SumonerGate.GetFollowerInfo();
                var currentFollowers;
                var existingFollowers;
                // Khởi tạo nếu chưa có
                // ✅ Sử dụng 'is' để kiểm tra và cast an toàn
                if (((existingFollowers = Bridge.as(currentFollowerInfo, System.Collections.Generic.List$1(LegoSDK.FollowerInitialInfo.LGSDKFollowerInitialInfo)))) != null) {
                    currentFollowers = existingFollowers;
                } else {
                    // Khởi tạo mới nếu null hoặc không đúng kiểu
                    currentFollowers = new (System.Collections.Generic.List$1(LegoSDK.FollowerInitialInfo.LGSDKFollowerInitialInfo)).ctor();
                }

                // Tính số phần tử có thể add thêm
                var maxFollower = SumonerGate.GetMaxFollower();
                var currentCount = currentFollowers.Count;
                var availableSlots = (maxFollower - currentCount) | 0;

                if (availableSlots <= 0) {
                    UnityEngine.Debug.Log$1(System.String.format("SetFollowerInfo: Already at max capacity ({0}/{1})", Bridge.box(currentCount, System.Int32), Bridge.box(maxFollower, System.Int32)));
                    UnityEngine.MonoBehaviour.Destroy(follower.Warrior);
                    return; // Đã đầy, không thể add thêm
                }

                currentFollowers.add(follower);

                // Set lại followerInfo cho SumonerGate
                SumonerGate.SetFollowerInfo(currentFollowers);
            },
            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.SetFollowerInfo end.*/

            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleCoinCollected start.*/
            HandleCoinCollected: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleCoinCollected", this ); }

                if (UnityEngine.GameObject.op_Equality(data.Target, null)) {
                    return;
                }

                var coinCollector = data.Target.GetComponent(CoinCollector);
                if (UnityEngine.MonoBehaviour.op_Equality(coinCollector, null)) {
                    return;
                }

                // Start moving coin object
                this.StartCoroutine$1(coinCollector.MoveCoinToUI(data.Coin));
                coinCollector.AddCoin(data.Value);
            },
            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleCoinCollected end.*/

            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleWarriorCollision start.*/
            HandleWarriorCollision: function (data) {
if ( TRACE ) { TRACE( "LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample#HandleWarriorCollision", this ); }

                var $t;
                if (UnityEngine.GameObject.op_Equality(data.Target, null)) {
                    return;
                }

                if (Bridge.referenceEquals(data.Target.tag, "LGSDK_SumonerGate")) {
                    var SumonerGate = data.Target.GetComponent(LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior);
                    if (UnityEngine.MonoBehaviour.op_Equality(SumonerGate, null)) {
                        UnityEngine.Debug.LogError$2(System.String.concat("Do not find LGSDKSumonerGateBehavior:", data));
                        return;
                    }

                    var follower = ($t = new LegoSDK.FollowerInitialInfo.LGSDKFollowerInitialInfo(), $t.level = data.Level, $t.damage = data.damage, $t.maxDistance = data.maxDistance, $t.fireRate = data.fireRate, $t.Warrior = data.Warrior, $t);

                    this.SetFollowerInfo(SumonerGate, follower);
                }
            },
            /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample.HandleWarriorCollision end.*/


        }
    });
    /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample end.*/

    /*LegoTimelineUpMechanic.Gate.LGSDKSingGateManager start.*/
    Bridge.define("LegoTimelineUpMechanic.Gate.LGSDKSingGateManager", {
        statics: {
            events: {
                OnFireRateTriggerEnter: null,
                OnAtkRangeTriggerEnter: null
            },
            ctors: {
                ctor: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingGateManager#ctor", this ); }

                    LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.addOnFireRateTriggerEnter(LegoTimelineUpMechanic.Gate.LGSDKSingGateManager.HandleFireRateEventTriggered);
                    LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.addOnAtkRangeTriggerEnter(LegoTimelineUpMechanic.Gate.LGSDKSingGateManager.HandleAtkRangeEventTriggered);
                }
            },
            methods: {
                /*LegoTimelineUpMechanic.Gate.LGSDKSingGateManager.HandleFireRateEventTriggered:static start.*/
                HandleFireRateEventTriggered: function (data) {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingGateManager#HandleFireRateEventTriggered", this ); }

                    !Bridge.staticEquals(LegoTimelineUpMechanic.Gate.LGSDKSingGateManager.OnFireRateTriggerEnter, null) ? LegoTimelineUpMechanic.Gate.LGSDKSingGateManager.OnFireRateTriggerEnter(data) : null;
                },
                /*LegoTimelineUpMechanic.Gate.LGSDKSingGateManager.HandleFireRateEventTriggered:static end.*/

                /*LegoTimelineUpMechanic.Gate.LGSDKSingGateManager.HandleAtkRangeEventTriggered:static start.*/
                HandleAtkRangeEventTriggered: function (data) {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingGateManager#HandleAtkRangeEventTriggered", this ); }

                    !Bridge.staticEquals(LegoTimelineUpMechanic.Gate.LGSDKSingGateManager.OnAtkRangeTriggerEnter, null) ? LegoTimelineUpMechanic.Gate.LGSDKSingGateManager.OnAtkRangeTriggerEnter(data) : null;
                },
                /*LegoTimelineUpMechanic.Gate.LGSDKSingGateManager.HandleAtkRangeEventTriggered:static end.*/


            }
        }
    });
    /*LegoTimelineUpMechanic.Gate.LGSDKSingGateManager end.*/

    /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior start.*/
    Bridge.define("LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                OnAtkRangeTriggerEnter: null
            }
        },
        fields: {
            pointA: null,
            pointB: null,
            speed: 0,
            waitTime: 0,
            isMovingToB: false,
            atkRange: 0,
            atkRangeText: null,
            healthSlider: null,
            maxHealth: 0,
            currentHealth: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#init", this ); }

                this.speed = 2.0;
                this.waitTime = 1.0;
                this.isMovingToB = true;
                this.atkRange = 0.0;
                this.maxHealth = 0.0;
                this.currentHealth = 0.0;
            }
        },
        methods: {
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#Start", this ); }

                if (UnityEngine.Component.op_Equality(this.pointA, null) || UnityEngine.Component.op_Equality(this.pointB, null)) {
                    return;
                }

                this.StartCoroutine$1(this.PatrolRoutine());
                this.UpdateText();
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.Start end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#Update", this ); }

                // Cập nhật text
                this.UpdateText();
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.Update end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.UpdateText start.*/
            UpdateText: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#UpdateText", this ); }

                // Tự động tìm TextMeshPro
                if (UnityEngine.MonoBehaviour.op_Equality(this.atkRangeText, null)) {
                    this.atkRangeText = this.GetComponentInChildren(TMPro.TextMeshPro);
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.atkRangeText, null)) {
                    var displayText = this.atkRange > 0 ? "+" + (System.Single.format(this.atkRange) || "") : System.Single.format(this.atkRange);
                    this.atkRangeText.text = (displayText || "") + "\nAtkRange";
                }
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.UpdateText end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.PatrolRoutine start.*/
            PatrolRoutine: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#PatrolRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    target,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( true ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 1: {
                                    // Chọn điểm đích
                                        target = this.isMovingToB ? this.pointB.position.$clone() : this.pointA.position.$clone();

                                        // Di chuyển đến điểm đích
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( pc.Vec3.distance( this.transform.position, target ) > 0.1 ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    this.transform.position = pc.Vec3.moveTowards( this.transform.position, target, this.speed * UnityEngine.Time.deltaTime );
                                        $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {
                                    // Nghỉ tại điểm đích
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.waitTime);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    // Đổi hướng
                                        this.isMovingToB = !this.isMovingToB;

                                        $step = 0;
                                        continue;
                                }
                                case 7: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.PatrolRoutine end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#OnTriggerEnter", this ); }

                var $t;
                var data = ($t = new LegoTimelineUpMechanic.Gate.LGSDKSingleGateBaseData(), $t.SingleGate = this.gameObject, $t.Target = other.gameObject, $t.AtkRange = this.atkRange, $t.IsHiddenDamage = this.IsHiddenDamage(), $t);

                !Bridge.staticEquals(LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.OnAtkRangeTriggerEnter, null) ? LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.OnAtkRangeTriggerEnter(data) : null;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.OnTriggerEnter end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.incrementAtkRange start.*/
            incrementAtkRange: function (value) {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#incrementAtkRange", this ); }

                this.atkRange += value;

                return this.atkRange;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.incrementAtkRange end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.TakeDamage start.*/
            TakeDamage: function (damage) {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#TakeDamage", this ); }

                // Trừ máu
                this.currentHealth -= damage;

                // Không cho máu âm
                this.currentHealth = UnityEngine.Mathf.Max(0, this.currentHealth);

                // Cập nhật UI
                this.UpdateHealthUI();

                // Kiểm tra lớp bảo vệ bị phá
                if (this.currentHealth <= 0) {
                    this.OnShieldDestroyed();
                }
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.TakeDamage end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.OnShieldDestroyed start.*/
            OnShieldDestroyed: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#OnShieldDestroyed", this ); }

                UnityEngine.Debug.Log$1("\ud83d\udee1\ufe0f L\u1edbp b\u1ea3o v\u1ec7 \u0111\u00e3 b\u1ecb ph\u00e1! C\u1ed5ng gi\u1edd c\u00f3 th\u1ec3 nh\u1eadn buff AtkRange!");

                // Có thể thêm hiệu ứng visual ở đây
                // - Đổi màu object
                // - Hiệu ứng nổ
                // - Âm thanh cảnh báo
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.OnShieldDestroyed end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.UpdateHealthUI start.*/
            UpdateHealthUI: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#UpdateHealthUI", this ); }

                // Cập nhật thanh máu
                if (UnityEngine.MonoBehaviour.op_Inequality(this.healthSlider, null)) {
                    var healthRatio = this.currentHealth / this.maxHealth;
                    var sliderRange = this.healthSlider.maxValue - this.healthSlider.minValue;
                    this.healthSlider.value = this.healthSlider.minValue + (healthRatio * sliderRange);

                    // ✅ THÊM: Ẩn thanh máu khi hết
                    if (this.healthSlider.value <= this.healthSlider.minValue) {
                        this.healthSlider.gameObject.SetActive(false);
                    } else {
                        this.healthSlider.gameObject.SetActive(true);
                    }
                }
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.UpdateHealthUI end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.GetAtkRange start.*/
            GetAtkRange: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#GetAtkRange", this ); }

                return this.atkRange;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.GetAtkRange end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.GetCurrentHealth start.*/
            GetCurrentHealth: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#GetCurrentHealth", this ); }

                return this.currentHealth;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.GetCurrentHealth end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.GetMaxHealth start.*/
            GetMaxHealth: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#GetMaxHealth", this ); }

                return this.maxHealth;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.GetMaxHealth end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.IsShieldActive start.*/
            IsShieldActive: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#IsShieldActive", this ); }

                return this.currentHealth > 0;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.IsShieldActive end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.IsHiddenDamage start.*/
            IsHiddenDamage: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior#IsHiddenDamage", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.healthSlider, null)) {
                    return true;
                }

                if (this.currentHealth <= 0) {
                    return true;
                }

                return false;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior.IsHiddenDamage end.*/


        }
    });
    /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior end.*/

    /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateBaseData start.*/
    Bridge.define("LegoTimelineUpMechanic.Gate.LGSDKSingleGateBaseData", {
        fields: {
            SingleGate: null,
            Target: null,
            FireRate: 0,
            AtkRange: 0,
            IsHiddenDamage: false
        }
    });
    /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateBaseData end.*/

    /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior start.*/
    Bridge.define("LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                OnFireRateTriggerEnter: null
            }
        },
        fields: {
            pointA: null,
            pointB: null,
            speed: 0,
            waitTime: 0,
            isMovingToB: false,
            fireRate: 0,
            fireRateText: null,
            healthSlider: null,
            maxHealth: 0,
            currentHealth: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#init", this ); }

                this.speed = 2.0;
                this.waitTime = 1.0;
                this.isMovingToB = true;
                this.fireRate = 0.0;
                this.maxHealth = 0.0;
                this.currentHealth = 0.0;
            }
        },
        methods: {
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#OnTriggerEnter", this ); }

                var $t;
                var data = ($t = new LegoTimelineUpMechanic.Gate.LGSDKSingleGateBaseData(), $t.SingleGate = this.gameObject, $t.Target = other.gameObject, $t.FireRate = this.fireRate, $t.IsHiddenDamage = this.IsHiddenDamage(), $t);

                !Bridge.staticEquals(LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.OnFireRateTriggerEnter, null) ? LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.OnFireRateTriggerEnter(data) : null;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.OnTriggerEnter end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#Start", this ); }

                if (UnityEngine.Component.op_Equality(this.pointA, null) || UnityEngine.Component.op_Equality(this.pointB, null)) {
                    return;
                }

                this.StartCoroutine$1(this.PatrolRoutine());
                this.UpdateText();
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.Start end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#Update", this ); }

                this.UpdateText();
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.Update end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.UpdateText start.*/
            UpdateText: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#UpdateText", this ); }

                // Tự động tìm TextMeshPro
                if (UnityEngine.MonoBehaviour.op_Equality(this.fireRateText, null)) {
                    this.fireRateText = this.GetComponentInChildren(TMPro.TextMeshPro);
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.fireRateText, null)) {
                    var displayText = this.fireRate > 0 ? "+" + (System.Single.format(this.fireRate) || "") : System.Single.format(this.fireRate);
                    this.fireRateText.text = (displayText || "") + "\nFireRate";
                }
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.UpdateText end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.PatrolRoutine start.*/
            PatrolRoutine: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#PatrolRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    target,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( true ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 1: {
                                    // Chọn điểm đích
                                        target = this.isMovingToB ? this.pointB.position.$clone() : this.pointA.position.$clone();

                                        // Di chuyển đến điểm đích
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ( pc.Vec3.distance( this.transform.position, target ) > 0.1 ) {
                                            $step = 3;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 3: {
                                    this.transform.position = pc.Vec3.moveTowards( this.transform.position, target, this.speed * UnityEngine.Time.deltaTime );
                                        $enumerator.current = null;
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    
                                        $step = 2;
                                        continue;
                                }
                                case 5: {
                                    // Nghỉ tại điểm đích
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.waitTime);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    // Đổi hướng
                                        this.isMovingToB = !this.isMovingToB;

                                        $step = 0;
                                        continue;
                                }
                                case 7: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.PatrolRoutine end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.incrementFireRate start.*/
            incrementFireRate: function (value) {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#incrementFireRate", this ); }

                this.fireRate += value;

                return this.fireRate;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.incrementFireRate end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.TakeDamage start.*/
            TakeDamage: function (damage) {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#TakeDamage", this ); }

                // Trừ máu
                this.currentHealth -= damage;

                // Không cho máu âm
                this.currentHealth = UnityEngine.Mathf.Max(0, this.currentHealth);

                // Cập nhật UI
                this.UpdateHealthUI();

                // Kiểm tra lớp bảo vệ bị phá
                if (this.currentHealth <= 0) {
                    this.OnShieldDestroyed();
                }
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.TakeDamage end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.UpdateHealthUI start.*/
            UpdateHealthUI: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#UpdateHealthUI", this ); }

                // Cập nhật thanh máu
                if (UnityEngine.MonoBehaviour.op_Inequality(this.healthSlider, null)) {
                    var healthRatio = this.currentHealth / this.maxHealth;
                    var sliderRange = this.healthSlider.maxValue - this.healthSlider.minValue;
                    this.healthSlider.value = this.healthSlider.minValue + (healthRatio * sliderRange);

                    // ✅ THÊM: Ẩn thanh máu khi hết
                    if (this.healthSlider.value <= this.healthSlider.minValue) {
                        this.healthSlider.gameObject.SetActive(false);
                    } else {
                        this.healthSlider.gameObject.SetActive(true);
                    }
                }
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.UpdateHealthUI end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.OnShieldDestroyed start.*/
            OnShieldDestroyed: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#OnShieldDestroyed", this ); }

                UnityEngine.Debug.Log$1("\ud83d\udee1\ufe0f L\u1edbp b\u1ea3o v\u1ec7 \u0111\u00e3 b\u1ecb ph\u00e1! C\u1ed5ng gi\u1edd c\u00f3 th\u1ec3 nh\u1eadn buff AtkRange!");

                // Có thể thêm hiệu ứng visual ở đây
                // - Đổi màu object
                // - Hiệu ứng nổ
                // - Âm thanh cảnh báo
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.OnShieldDestroyed end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.GetFireRate start.*/
            GetFireRate: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#GetFireRate", this ); }

                return this.fireRate;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.GetFireRate end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.GetCurrentHealth start.*/
            GetCurrentHealth: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#GetCurrentHealth", this ); }

                return this.currentHealth;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.GetCurrentHealth end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.GetMaxHealth start.*/
            GetMaxHealth: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#GetMaxHealth", this ); }

                return this.maxHealth;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.GetMaxHealth end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.IsShieldActive start.*/
            IsShieldActive: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#IsShieldActive", this ); }

                return this.currentHealth > 0;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.IsShieldActive end.*/

            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.IsHiddenDamage start.*/
            IsHiddenDamage: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior#IsHiddenDamage", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.healthSlider, null)) {
                    return true;
                }

                if (this.currentHealth <= 0) {
                    return true;
                }

                return false;
            },
            /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior.IsHiddenDamage end.*/


        }
    });
    /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior end.*/

    /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBaseData start.*/
    Bridge.define("LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBaseData", {
        fields: {
            SumonerGate: null,
            Target: null,
            FollowerInfo: null
        }
    });
    /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBaseData end.*/

    /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior start.*/
    Bridge.define("LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                OnSumonerCollisionTriggerEnter: null
            }
        },
        fields: {
            maxFollower: 0,
            followerInfo: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior#init", this ); }

                this.maxFollower = 8;
            }
        },
        methods: {
            /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior#OnTriggerEnter", this ); }

                var $t;
                var data = ($t = new LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBaseData(), $t.SumonerGate = this.gameObject, $t.Target = other.gameObject, $t.FollowerInfo = this.followerInfo, $t);

                !Bridge.staticEquals(LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior.OnSumonerCollisionTriggerEnter, null) ? LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior.OnSumonerCollisionTriggerEnter(data) : null;
            },
            /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior.OnTriggerEnter end.*/

            /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior.GetFollowerInfo start.*/
            GetFollowerInfo: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior#GetFollowerInfo", this ); }

                return this.followerInfo;
            },
            /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior.GetFollowerInfo end.*/

            /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior.SetFollowerInfo start.*/
            SetFollowerInfo: function (value) {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior#SetFollowerInfo", this ); }

                this.followerInfo = value;
            },
            /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior.SetFollowerInfo end.*/

            /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior.GetMaxFollower start.*/
            GetMaxFollower: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior#GetMaxFollower", this ); }

                return this.maxFollower;
            },
            /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior.GetMaxFollower end.*/


        }
    });
    /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior end.*/

    /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager start.*/
    Bridge.define("LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager", {
        statics: {
            events: {
                OnSumonerCollisionTriggerEnter: null
            },
            ctors: {
                ctor: function () {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager#ctor", this ); }

                    LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior.addOnSumonerCollisionTriggerEnter(LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager.HandleSumonerCollisionEventTriggered);
                }
            },
            methods: {
                /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager.HandleSumonerCollisionEventTriggered:static start.*/
                HandleSumonerCollisionEventTriggered: function (data) {
if ( TRACE ) { TRACE( "LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager#HandleSumonerCollisionEventTriggered", this ); }

                    !Bridge.staticEquals(LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager.OnSumonerCollisionTriggerEnter, null) ? LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager.OnSumonerCollisionTriggerEnter(data) : null;
                },
                /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager.HandleSumonerCollisionEventTriggered:static end.*/


            }
        }
    });
    /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager end.*/

    /*LGSDK.TimelineUp.Obstacles.ILGSDKObstacleBehavior start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.ILGSDKObstacleBehavior", {
        $kind: 3
    });
    /*LGSDK.TimelineUp.Obstacles.ILGSDKObstacleBehavior end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                OnEffectTriggered: null
            }
        },
        fields: {
            ObstacleType: 0,
            behaviorsArray: null,
            health: 0,
            isDestroyed: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#init", this ); }

                this.health = 50.0;
                this.isDestroyed = false;
            }
        },
        methods: {
            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#Awake", this ); }

                this.behaviorsArray = this.GetComponents(LGSDK.TimelineUp.Obstacles.ILGSDKObstacleBehavior);
                // Gán giá trị mặc định cho ObstacleType
                this.InitializeObstacleType();
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.Awake end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#Start", this ); }

                this.Initialize();
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.Start end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#Update", this ); }

                var $t;
                if (this.isDestroyed) {
                    return;
                }

                $t = Bridge.getEnumerator(this.behaviorsArray);
                try {
                    while ($t.moveNext()) {
                        var behavior = { v : $t.Current };
                        behavior.v != null ? behavior.v.LGSDK$TimelineUp$Obstacles$ILGSDKObstacleBehavior$UpdateBehavior() : null;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                if (this.health <= 0 && !this.isDestroyed) {
                    this.OnDestroyObstacle();
                }
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.Update end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.InitializeObstacleType start.*/
            InitializeObstacleType: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#InitializeObstacleType", this ); }

                // Giá trị mặc định, có thể override trong các class con
                this.ObstacleType = LGSDK.TimelineUp.Obstacles.LGSDKObstacleType.Lock;
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.InitializeObstacleType end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#Initialize", this ); }


            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.Initialize end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.TriggerEffect start.*/
            TriggerEffect: function (effectArgs) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#TriggerEffect", this ); }

                !Bridge.staticEquals(LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.OnEffectTriggered, null) ? LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.OnEffectTriggered(this, effectArgs) : null;
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.TriggerEffect end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#OnTriggerEnter", this ); }

                UnityEngine.Debug.Log$1("OnTriggerEnter");

                if (this.isDestroyed) {
                    return;
                }

                // Gọi phương thức xử lý va chạm
                this.HandleTriggerEnter(other);
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.OnTriggerEnter end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.HandleTriggerEnter start.*/
            HandleTriggerEnter: function (collider) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#HandleTriggerEnter", this ); }

                // Hành vi mặc định: Bắn event khi va chạm
                this.TriggerEffect(new LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs.$ctor1(this.ObstacleType, LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType.Collision, this.gameObject, collider.gameObject));
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.HandleTriggerEnter end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.TakeDamage start.*/
            TakeDamage: function (damage) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#TakeDamage", this ); }

                if (this.isDestroyed) {
                    return;
                }
                this.health -= damage;

                if (this.health <= 0 && !this.isDestroyed) {
                    this.OnDestroyObstacle();
                }
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.TakeDamage end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.IsDestroyed start.*/
            IsDestroyed: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#IsDestroyed", this ); }

                return this.isDestroyed;
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.IsDestroyed end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.OnDestroyObstacle start.*/
            OnDestroyObstacle: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#OnDestroyObstacle", this ); }

                this.isDestroyed = true;

                // Bắn event khi bị phá hủy
                this.HandleDestroy();

                UnityEngine.MonoBehaviour.Destroy(this.gameObject); // Mặc định phá hủy đối tượng
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.OnDestroyObstacle end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.HandleDestroy start.*/
            HandleDestroy: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle#HandleDestroy", this ); }

                this.TriggerEffect(new LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs.ctor(this.ObstacleType, LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType.Destroyed, this.gameObject));
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.HandleDestroy end.*/


        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager", {
        statics: {
            events: {
                OnObstacleEffect: null
            },
            ctors: {
                ctor: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager#ctor", this ); }

                    // Đăng ký với LGSDKBaseObstacle.OnEffectTriggered
                    LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.addOnEffectTriggered(LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager.HandleObstacleEffect);
                }
            },
            methods: {
                /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager.HandleObstacleEffect:static start.*/
                HandleObstacleEffect: function (sender, effectArgs) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager#HandleObstacleEffect", this ); }

                    !Bridge.staticEquals(LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager.OnObstacleEffect, null) ? LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager.OnObstacleEffect(effectArgs) : null;
                },
                /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager.HandleObstacleEffect:static end.*/

                /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager.Unsubscribe:static start.*/
                /**
                 * Hủy đăng ký LGSDKObstacleCallbackManager khỏi LGSDKBaseObstacle.OnEffectTriggered.
                 Gọi method này khi không còn cần Obstacle system (ví dụ: khi unload game).
                 *
                 * @static
                 * @public
                 * @this LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager
                 * @memberof LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager
                 * @return  {void}
                 */
                Unsubscribe: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager#Unsubscribe", this ); }

                    LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.removeOnEffectTriggered(LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager.HandleObstacleEffect);
                },
                /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager.Unsubscribe:static end.*/

                /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager.ClearSubscribers:static start.*/
                /**
                 * Xóa tất cả các subscriber của các event.
                 Gọi method này khi chuyển scene hoặc khi không còn cần xử lý Obstacle effects.
                 Lưu ý: Các class đã đăng ký nên tự hủy đăng ký trong OnDestroy.
                 *
                 * @static
                 * @public
                 * @this LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager
                 * @memberof LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager
                 * @return  {void}
                 */
                ClearSubscribers: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager#ClearSubscribers", this ); }

                    LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager.OnObstacleEffect = null;
                },
                /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager.ClearSubscribers:static end.*/


            }
        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType", {
        $kind: 6,
        statics: {
            fields: {
                Collision: 0,
                Destroyed: 1,
                LockOpened: 2,
                BarrelExploded: 3,
                BarricadeDestroyed: 4
            }
        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs", {
        fields: {
            ObstacleType: 0,
            CallbackType: 0,
            ObstacleObject: null,
            ColliderObject: null,
            Value: 0
        },
        ctors: {
            $ctor1: function (type, callbackType, obstacle, collider, value) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs#$ctor1", this ); }

                if (value === void 0) { value = 0.0; }

                this.$initialize();
                System.Object.call(this);
                this.ObstacleType = type;
                this.CallbackType = callbackType;
                this.ObstacleObject = obstacle;
                this.ColliderObject = collider;
                this.Value = value;
            },
            ctor: function (type, callbackType, obstacle, value) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs#ctor", this ); }

                if (value === void 0) { value = 0.0; }

                this.$initialize();
                System.Object.call(this);
                this.ObstacleType = type;
                this.CallbackType = callbackType;
                this.ObstacleObject = obstacle;
                this.Value = value;
            }
        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            pointA: null,
            pointB: null,
            speed: 0,
            waitTime: 0,
            targetPoint: null,
            waitTimer: 0,
            isWaiting: false
        },
        props: {
            Speed: {
                get: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#Speed#get", this ); }

                    return this.speed;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#Speed#set", this ); }

                    this.speed = value;
                }
            },
            WaitTime: {
                get: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#WaitTime#get", this ); }

                    return this.waitTime;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#WaitTime#set", this ); }

                    this.waitTime = value;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#init", this ); }

                this.speed = 2.0;
                this.waitTime = 1.0;
                this.waitTimer = 0.0;
                this.isWaiting = false;
            }
        },
        methods: {
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#Start", this ); }

                // Kiểm tra nếu pointA hoặc pointB không được gán
                if (UnityEngine.Component.op_Equality(this.pointA, null) || UnityEngine.Component.op_Equality(this.pointB, null)) {
                    UnityEngine.Debug.LogError$2("PointA ho\u1eb7c PointB kh\u00f4ng \u0111\u01b0\u1ee3c g\u00e1n! Vui l\u00f2ng g\u00e1n trong Inspector.");
                    this.enabled = false; // Tắt script nếu không có điểm
                    return;
                }

                // Khởi tạo điểm mục tiêu ban đầu là pointA
                this.targetPoint = this.pointA;
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior.Start end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior.UpdatePatrol start.*/
            UpdatePatrol: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#UpdatePatrol", this ); }

                if (UnityEngine.Component.op_Equality(this.pointA, null) || UnityEngine.Component.op_Equality(this.pointB, null)) {
                    return;
                } // Kiểm tra nếu điểm chưa được tạo

                if (this.isWaiting) {
                    this.waitTimer += UnityEngine.Time.deltaTime;
                    if (this.waitTimer >= this.waitTime) {
                        this.isWaiting = false;
                        this.waitTimer = 0.0;
                        this.targetPoint = (UnityEngine.Component.op_Equality(this.targetPoint, this.pointA)) ? this.pointB : this.pointA;
                        // Debug.Log($"Chuyển mục tiêu sang: {targetPoint.name}, Vị trí: {targetPoint.position}");
                    }
                } else {
                    // Chỉ cập nhật tọa độ X của đối tượng, giữ nguyên Y và Z
                    var newX = UnityEngine.Mathf.MoveTowards(this.transform.position.x, this.targetPoint.position.x, this.speed * UnityEngine.Time.deltaTime);
                    this.transform.position = new pc.Vec3( newX, this.transform.position.y, this.transform.position.z );

                    if (Math.abs(this.transform.position.x - this.targetPoint.position.x) < 0.01) {
                        this.isWaiting = true;
                        // Debug.Log($"Đã đến {targetPoint.name}, Vị trí: {transform.position}");
                    }
                }
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior.UpdatePatrol end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior.GetPointA start.*/
            GetPointA: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#GetPointA", this ); }

                return this.pointA;
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior.GetPointA end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior.GetPointB start.*/
            GetPointB: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#GetPointB", this ); }

                return this.pointB;
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior.GetPointB end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior.SetPoints start.*/
            SetPoints: function (newPointA, newPointB) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior#SetPoints", this ); }

                this.pointA = newPointA;
                this.pointB = newPointB;
                this.targetPoint = this.pointA; // Reset mục tiêu về pointA
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior.SetPoints end.*/


        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            damage: 0
        },
        methods: {
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample.SetDamage start.*/
            SetDamage: function (damageValue) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample#SetDamage", this ); }

                this.damage = damageValue;
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample.SetDamage end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample.TakeCollision start.*/
            TakeCollision: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample#TakeCollision", this ); }

                // Hủy đạn sau khi va chạm
                UnityEngine.MonoBehaviour.Destroy(this.gameObject);
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample.TakeCollision end.*/


        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            player: null,
            gold: 0,
            playerHealth: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample#init", this ); }

                this.gold = 0;
                this.playerHealth = 100.0;
            }
        },
        methods: {
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample#Start", this ); }

                // Đăng ký lắng nghe callback từ LGSDKObstacleCallbackManager
                LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager.addOnObstacleEffect(Bridge.fn.cacheBind(this, this.HandleObstacleEffect));

                if (UnityEngine.MonoBehaviour.op_Equality(this.player, null)) {
                    UnityEngine.Debug.LogWarning$1("Player ch\u01b0a \u0111\u01b0\u1ee3c g\u00e1n trong LGSDKObstaclesExample!");
                }
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample.Start end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample#OnDestroy", this ); }

                // Hủy đăng ký khi GameManager bị phá hủy
                LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager.removeOnObstacleEffect(Bridge.fn.cacheBind(this, this.HandleObstacleEffect));
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample.OnDestroy end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample.HandleObstacleEffect start.*/
            HandleObstacleEffect: function (effectArgs) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample#HandleObstacleEffect", this ); }

                switch (effectArgs.CallbackType) {
                    case LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType.Collision: 
                        {
                            var obstacle = effectArgs.ObstacleObject;
                            var collider = effectArgs.ColliderObject;

                            // Kiểm tra nếu va chạm với player
                            if (UnityEngine.GameObject.op_Inequality(collider, null) && UnityEngine.MonoBehaviour.op_Inequality(collider.GetComponent(LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample), null)) {
                                if (effectArgs.ObstacleType === LGSDK.TimelineUp.Obstacles.LGSDKObstacleType.Saw) {
                                    // Lưỡi cưa gây sát thương cho player
                                    this.playerHealth -= effectArgs.Value;
                                    UnityEngine.Debug.Log$1(System.String.format("Player b\u1ecb l\u01b0\u1ee1i c\u01b0a g\u00e2y s\u00e1t th\u01b0\u01a1ng! M\u00e1u c\u00f2n: {0}", [Bridge.box(this.playerHealth, System.Single, System.Single.format, System.Single.getHashCode)]));
                                    if (this.playerHealth <= 0) {
                                        UnityEngine.Debug.Log$1("Player \u0111\u00e3 ch\u1ebft!");
                                        // Có thể thêm logic game over
                                    }
                                }
                            } else {
                                var bullet;
                                if (UnityEngine.GameObject.op_Inequality(collider, null) && UnityEngine.MonoBehaviour.op_Inequality(((bullet = collider.GetComponent(LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample))), null)) {
                                    var baseObstacle;
                                    if (UnityEngine.GameObject.op_Inequality(obstacle, null) && UnityEngine.MonoBehaviour.op_Inequality(((baseObstacle = obstacle.GetComponent(LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle))), null)) {
                                        baseObstacle.TakeDamage(bullet.damage);
                                    }

                                    bullet.TakeCollision();
                                }
                            }
                            break;
                        }
                    case LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType.Destroyed: 
                        {
                            UnityEngine.Debug.Log$1(System.String.format("{0} \u0111\u00e3 b\u1ecb ph\u00e1 h\u1ee7y!", [Bridge.box(effectArgs.ObstacleType, LGSDK.TimelineUp.Obstacles.LGSDKObstacleType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleType))]));
                            break;
                        }
                    case LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType.LockOpened: 
                        {
                            UnityEngine.Debug.Log$1("\u1ed4 kh\u00f3a \u0111\u00e3 \u0111\u01b0\u1ee3c m\u1edf! M\u1edf c\u1eeda ho\u1eb7c k\u00edch ho\u1ea1t c\u01a1 ch\u1ebf ti\u1ebfp theo.");
                            // Có thể thêm logic mở cửa hoặc kích hoạt event
                            break;
                        }
                    case LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType.BarricadeDestroyed: 
                        {
                            UnityEngine.Debug.Log$1("R\u00e0o g\u1ed7 \u0111\u00e3 b\u1ecb ph\u00e1 h\u1ee7y! Ti\u1ebfn t\u1edbi khu v\u1ef1c ti\u1ebfp theo.");
                            // Có thể thêm logic mở đường hoặc spawn item
                            break;
                        }
                    case LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType.BarrelExploded: 
                        {
                            // Nhận vàng từ thùng thép
                            this.gold = (this.gold + Bridge.Int.clip32(effectArgs.Value)) | 0;
                            UnityEngine.Debug.Log$1(System.String.format("Th\u00f9ng th\u00e9p n\u1ed5! Nh\u1eadn \u0111\u01b0\u1ee3c {0} v\u00e0ng. T\u1ed5ng v\u00e0ng: {1}", Bridge.box(effectArgs.Value, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(this.gold, System.Int32)));
                            break;
                        }
                }
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample.HandleObstacleEffect end.*/


        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            bulletPrefab: null,
            firePoint: null,
            bulletSpeed: 0,
            fireRate: 0,
            bulletDamage: 0,
            moveSpeed: 0,
            nextFireTime: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample#init", this ); }

                this.bulletSpeed = 20.0;
                this.fireRate = 0.5;
                this.bulletDamage = 10.0;
                this.moveSpeed = 5.0;
                this.nextFireTime = 0.0;
            }
        },
        methods: {
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample#Update", this ); }

                // Bắn đạn khi nhấn chuột trái
                if (UnityEngine.Input.GetMouseButton(0) && UnityEngine.Time.time >= this.nextFireTime) {
                    this.Shoot();
                    this.nextFireTime = UnityEngine.Time.time + this.fireRate;
                }

                var moveX = UnityEngine.Input.GetAxis("Horizontal");
                var moveZ = UnityEngine.Input.GetAxis("Vertical");
                var movement = new pc.Vec3( moveX, 0, moveZ ).clone().scale( this.moveSpeed ).clone().scale( UnityEngine.Time.deltaTime );
                this.transform.Translate$1(movement);
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample.Update end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample.Shoot start.*/
            Shoot: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample#Shoot", this ); }

                if (UnityEngine.GameObject.op_Equality(this.bulletPrefab, null) || UnityEngine.Component.op_Equality(this.firePoint, null)) {
                    UnityEngine.Debug.LogWarning$1("Bullet Prefab ho\u1eb7c Fire Point ch\u01b0a \u0111\u01b0\u1ee3c g\u00e1n!");
                    return;
                }

                // Tạo đạn
                var bullet = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.bulletPrefab, this.firePoint.position, pc.Quat.IDENTITY.clone());
                var rb = bullet.GetComponent(UnityEngine.Rigidbody);
                if (UnityEngine.Component.op_Inequality(rb, null)) {
                    // Bắn đạn theo trục Z
                    rb.velocity = new pc.Vec3( 0, 0, 1 ).clone().scale( this.bulletSpeed );
                }

                // Gắn sát thương cho đạn
                var bulletScript = bullet.GetComponent(LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample);
                if (UnityEngine.MonoBehaviour.op_Inequality(bulletScript, null)) {
                    bulletScript.SetDamage(this.bulletDamage);
                }

                // Tự hủy đạn sau 5 giây
                this.Destroy(bullet, 5.0);
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample.Shoot end.*/


        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleType start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKObstacleType", {
        $kind: 6,
        statics: {
            fields: {
                Lock: 0,
                Saw: 1,
                WoodenBarricade: 2,
                SteelBarrel: 3
            }
        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleType end.*/

    /*LGSDKBullet start.*/
    Bridge.define("LGSDKBullet", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                OnBulletTriggerEnter: null
            }
        },
        fields: {
            speed: 0,
            maxDistance: 0,
            damage: 0,
            fireRate: 0,
            startPosition: null
        },
        props: {
            Damage: {
                get: function () {
if ( TRACE ) { TRACE( "LGSDKBullet#Damage#get", this ); }

                    return this.damage;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "LGSDKBullet#Damage#set", this ); }

                    this.damage = value;
                }
            },
            MaxDistance: {
                get: function () {
if ( TRACE ) { TRACE( "LGSDKBullet#MaxDistance#get", this ); }

                    return this.maxDistance;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "LGSDKBullet#MaxDistance#set", this ); }

                    this.maxDistance = value;
                }
            },
            FireRate: {
                get: function () {
if ( TRACE ) { TRACE( "LGSDKBullet#FireRate#get", this ); }

                    return this.fireRate;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "LGSDKBullet#FireRate#set", this ); }

                    this.fireRate = value;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDKBullet#init", this ); }

                this.startPosition = new UnityEngine.Vector3();
                this.speed = 10.0;
                this.maxDistance = 20.0;
                this.damage = 10.0;
                this.fireRate = 10.0;
            }
        },
        methods: {
            /*LGSDKBullet.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LGSDKBullet#Start", this ); }

                this.startPosition = this.transform.position.$clone();
            },
            /*LGSDKBullet.Start end.*/

            /*LGSDKBullet.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LGSDKBullet#Update", this ); }

                // Move the bullet forward
                this.transform.Translate$1(new pc.Vec3( 0, 0, 1 ).clone().scale( this.speed ).clone().scale( UnityEngine.Time.deltaTime ));

                // destryoy bullet
                if (pc.Vec3.distance( this.startPosition, this.transform.position ) > this.maxDistance) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*LGSDKBullet.Update end.*/

            /*LGSDKBullet.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "LGSDKBullet#OnTriggerEnter", this ); }

                var $t;
                var data = ($t = new LegoSDK.Bullet.BulletEventData(), $t.Bullet = this.gameObject, $t.Target = other.gameObject, $t.Damage = this.damage, $t.FireRate = this.fireRate, $t.MaxDistance = this.maxDistance, $t);
                !Bridge.staticEquals(LGSDKBullet.OnBulletTriggerEnter, null) ? LGSDKBullet.OnBulletTriggerEnter(data) : null;
            },
            /*LGSDKBullet.OnTriggerEnter end.*/


        }
    });
    /*LGSDKBullet end.*/

    /*LGSDKCameraFollow start.*/
    Bridge.define("LGSDKCameraFollow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            leaderCharacter: null,
            offset: null,
            smoothSpeed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDKCameraFollow#init", this ); }

                this.offset = new UnityEngine.Vector3();
                this.offset = new pc.Vec3( 0, 5, -15 );
                this.smoothSpeed = 0.125;
            }
        },
        methods: {
            /*LGSDKCameraFollow.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "LGSDKCameraFollow#LateUpdate", this ); }

                if (UnityEngine.Component.op_Equality(this.leaderCharacter, null)) {
                    return;
                }

                // Vị trí mục tiêu là vị trí player cộng offset
                var desiredPosition = this.leaderCharacter.position.$clone().add( this.offset );

                // Di chuyển camera từ vị trí hiện tại đến vị trí mục tiêu một cách mượt mà
                var smoothedPosition = new pc.Vec3().lerp( this.transform.position, desiredPosition, this.smoothSpeed );

                this.transform.position = smoothedPosition.$clone();

            },
            /*LGSDKCameraFollow.LateUpdate end.*/


        }
    });
    /*LGSDKCameraFollow end.*/

    /*LGSDKDamagePopup start.*/
    Bridge.define("LGSDKDamagePopup", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            text: null,
            lifetime: 0,
            floatSpeed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDKDamagePopup#init", this ); }

                this.lifetime = 1.0;
                this.floatSpeed = 1.0;
            }
        },
        methods: {
            /*LGSDKDamagePopup.SetDamage start.*/
            SetDamage: function (damage) {
if ( TRACE ) { TRACE( "LGSDKDamagePopup#SetDamage", this ); }

                this.text.text = Bridge.toString(damage);
                this.Destroy(this.gameObject, this.lifetime);
            },
            /*LGSDKDamagePopup.SetDamage end.*/

            /*LGSDKDamagePopup.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "LGSDKDamagePopup#LateUpdate", this ); }

                if (UnityEngine.Component.op_Inequality(UnityEngine.Camera.main, null)) {
                    this.transform.LookAt(UnityEngine.Camera.main.transform);
                }
                this.transform.Rotate(0, 180, 0); // Quay ngược lại vì LookAt quay lưng
                this.transform.position = this.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( this.floatSpeed ).clone().scale( UnityEngine.Time.deltaTime ) );
            },
            /*LGSDKDamagePopup.LateUpdate end.*/


        }
    });
    /*LGSDKDamagePopup end.*/

    /*LGSDKEnemyBullet start.*/
    Bridge.define("LGSDKEnemyBullet", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            startPos: null,
            maxDistance: 0,
            speed: 0,
            rb: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDKEnemyBullet#init", this ); }

                this.startPos = new UnityEngine.Vector3();
                this.maxDistance = 10.0;
                this.speed = 10.0;
            }
        },
        methods: {
            /*LGSDKEnemyBullet.Init start.*/
            Init: function (spawnPos, maxDist) {
if ( TRACE ) { TRACE( "LGSDKEnemyBullet#Init", this ); }

                this.startPos = spawnPos.$clone();
                this.maxDistance = maxDist;
                this.rb = this.GetComponent(UnityEngine.Rigidbody);
                if (UnityEngine.Component.op_Inequality(this.rb, null)) {
                    this.rb.velocity = new pc.Vec3( 0, 0, -1 ).clone().scale( this.speed ); // Di chuyển theo hướng -Z
                }
            },
            /*LGSDKEnemyBullet.Init end.*/

            /*LGSDKEnemyBullet.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "LGSDKEnemyBullet#OnEnable", this ); }

                LegoSDK.Follower.LGSDKFollowerManager.addOnFollowerTriggerEnter(Bridge.fn.cacheBind(this, this.HandleFollowerHitEnemyBullet));
            },
            /*LGSDKEnemyBullet.OnEnable end.*/

            /*LGSDKEnemyBullet.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "LGSDKEnemyBullet#OnDisable", this ); }

                LegoSDK.Follower.LGSDKFollowerManager.removeOnFollowerTriggerEnter(Bridge.fn.cacheBind(this, this.HandleFollowerHitEnemyBullet));
            },
            /*LGSDKEnemyBullet.OnDisable end.*/

            /*LGSDKEnemyBullet.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LGSDKEnemyBullet#Start", this ); }

                // Lưu vị trí bắt đầu
                this.startPos = this.transform.position.$clone();
            },
            /*LGSDKEnemyBullet.Start end.*/

            /*LGSDKEnemyBullet.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LGSDKEnemyBullet#Update", this ); }

                // Kiểm tra khoảng cách và hủy nếu quá xa
                if (pc.Vec3.distance( this.transform.position, this.startPos ) >= this.maxDistance) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*LGSDKEnemyBullet.Update end.*/

            /*LGSDKEnemyBullet.HandleFollowerHitEnemyBullet start.*/
            HandleFollowerHitEnemyBullet: function (data) {
if ( TRACE ) { TRACE( "LGSDKEnemyBullet#HandleFollowerHitEnemyBullet", this ); }

                if (UnityEngine.GameObject.op_Equality(data.Target, this.gameObject)) {
                    //xóa Enemy Bullet va chạm vs Follower
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    //xóa Follower va chạm vs Enemy Bullet
                    UnityEngine.MonoBehaviour.Destroy(data.Follower);
                }
            },
            /*LGSDKEnemyBullet.HandleFollowerHitEnemyBullet end.*/

            /*LGSDKEnemyBullet.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "LGSDKEnemyBullet#OnTriggerEnter", this ); }
 },
            /*LGSDKEnemyBullet.OnTriggerEnter end.*/


        }
    });
    /*LGSDKEnemyBullet end.*/

    /*LGSDKEnemyConfig start.*/
    Bridge.define("LGSDKEnemyConfig", {
        fields: {
            enemyPrefab: null,
            bulletPrefab: null,
            level: 0,
            quantity: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDKEnemyConfig#init", this ); }

                this.level = 1;
                this.quantity = 1;
            }
        }
    });
    /*LGSDKEnemyConfig end.*/

    /*LGSDKEnemyController start.*/
    Bridge.define("LGSDKEnemyController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            maxHealth: 0,
            currentHealth: 0,
            healthBarImage: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDKEnemyController#init", this ); }

                this.maxHealth = 100.0;
            }
        },
        methods: {
            /*LGSDKEnemyController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LGSDKEnemyController#Start", this ); }

                this.currentHealth = this.maxHealth; // Khởi tạo máu hiện tại bằng máu tối đa
                this.UpdateHealthUI();
            },
            /*LGSDKEnemyController.Start end.*/

            /*LGSDKEnemyController.TakeDamage start.*/
            TakeDamage: function (amount) {
if ( TRACE ) { TRACE( "LGSDKEnemyController#TakeDamage", this ); }

                this.currentHealth -= amount; // Trừ vào máu hiện tại thay vì máu tối đa
                UnityEngine.Debug.Log$1(System.String.format("{0} b\u1ecb tr\u00fang \u0111\u1ea1n, m\u00e1u c\u00f2n l\u1ea1i: {1}/{2}", this.gameObject.name, Bridge.box(this.currentHealth, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(this.maxHealth, System.Single, System.Single.format, System.Single.getHashCode)));

                if (this.currentHealth <= 0) {
                    this.Die();
                }
                this.UpdateHealthUI();
            },
            /*LGSDKEnemyController.TakeDamage end.*/

            /*LGSDKEnemyController.UpdateHealthUI start.*/
            UpdateHealthUI: function () {
if ( TRACE ) { TRACE( "LGSDKEnemyController#UpdateHealthUI", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.healthBarImage, null)) {
                    this.healthBarImage.fillAmount = this.currentHealth / this.maxHealth;
                }
            },
            /*LGSDKEnemyController.UpdateHealthUI end.*/

            /*LGSDKEnemyController.Die start.*/
            Die: function () {
if ( TRACE ) { TRACE( "LGSDKEnemyController#Die", this ); }

                UnityEngine.Debug.Log$1(System.String.format("{0} \u0111\u00e3 ch\u1ebft", [this.gameObject.name]));
                UnityEngine.MonoBehaviour.Destroy(this.gameObject);
            },
            /*LGSDKEnemyController.Die end.*/


        }
    });
    /*LGSDKEnemyController end.*/

    /*LGSDKEnemyShooter start.*/
    Bridge.define("LGSDKEnemyShooter", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            bulletPrefab: null,
            firePoint: null,
            bulletSpeed: 0,
            maxDistance: 0,
            fireRate: 0,
            fireCooldown: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDKEnemyShooter#init", this ); }

                this.bulletSpeed = 10.0;
                this.maxDistance = 20.0;
                this.fireRate = 2.0;
                this.fireCooldown = 0.0;
            }
        },
        methods: {
            /*LGSDKEnemyShooter.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LGSDKEnemyShooter#Start", this ); }

                // Debug check for required components
                if (UnityEngine.GameObject.op_Equality(this.bulletPrefab, null)) {
                    UnityEngine.Debug.LogError$2(System.String.format("[{0}] bulletPrefab is null!", [this.gameObject.name]));
                }
                if (UnityEngine.Component.op_Equality(this.firePoint, null)) {
                    UnityEngine.Debug.LogError$2(System.String.format("[{0}] firePoint is null!", [this.gameObject.name]));
                }
                UnityEngine.Debug.Log$1(System.String.format("[{0}] bulletPrefab: {1}, firePoint: {2}", this.gameObject.name, Bridge.box(UnityEngine.GameObject.op_Inequality(this.bulletPrefab, null), System.Boolean, System.Boolean.toString), Bridge.box(UnityEngine.Component.op_Inequality(this.firePoint, null), System.Boolean, System.Boolean.toString)));
            },
            /*LGSDKEnemyShooter.Start end.*/

            /*LGSDKEnemyShooter.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LGSDKEnemyShooter#Update", this ); }

                this.fireCooldown -= UnityEngine.Time.deltaTime;

                if (this.fireCooldown <= 0.0) {
                    this.Shoot();
                    this.fireCooldown = this.fireRate;
                }
            },
            /*LGSDKEnemyShooter.Update end.*/

            /*LGSDKEnemyShooter.Shoot start.*/
            Shoot: function () {
if ( TRACE ) { TRACE( "LGSDKEnemyShooter#Shoot", this ); }

                if (UnityEngine.GameObject.op_Equality(this.bulletPrefab, null) || UnityEngine.Component.op_Equality(this.firePoint, null)) {
                    UnityEngine.Debug.LogWarning$1(System.String.format("[{0}] Cannot shoot: bulletPrefab/firePoint is null", [this.gameObject.name]));
                    return;
                }

                // Tạo đạn tại vị trí firePoint
                var bullet = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.bulletPrefab, this.firePoint.position, this.firePoint.rotation);

                // Lấy và cấu hình Rigidbody
                var rb = bullet.GetComponent(UnityEngine.Rigidbody);
                if (UnityEngine.Component.op_Inequality(rb, null)) {
                    // Đảm bảo Rigidbody được cấu hình đúng
                    rb.useGravity = false;
                    rb.isKinematic = false;
                    rb.interpolation = UnityEngine.RigidbodyInterpolation.None;
                    rb.collisionDetectionMode = UnityEngine.CollisionDetectionMode.Discrete;
                } else {
                    UnityEngine.Debug.LogError$2(System.String.format("[{0}] Bullet has no Rigidbody!", [this.gameObject.name]));
                }

                // Lấy và cấu hình LGSDKEnemyBullet
                var bulletScript = bullet.GetComponent(LGSDKEnemyBullet);
                if (UnityEngine.MonoBehaviour.op_Inequality(bulletScript, null)) {
                    bulletScript.speed = this.bulletSpeed;
                    bulletScript.Init(this.firePoint.position, this.maxDistance);
                } else {
                    UnityEngine.Debug.LogError$2(System.String.format("[{0}] Bullet ko c\u00f3 LGSDKEnemyBullet component!", [this.gameObject.name]));
                }
            },
            /*LGSDKEnemyShooter.Shoot end.*/


        }
    });
    /*LGSDKEnemyShooter end.*/

    /*LGSDKEnemySpawner start.*/
    Bridge.define("LGSDKEnemySpawner", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            enemyConfigs: null,
            startX: 0,
            spacingX: 0,
            startZ: 0,
            enemiesPerRow: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDKEnemySpawner#init", this ); }

                this.startX = -5.0;
                this.spacingX = 3.0;
                this.startZ = 10.0;
                this.enemiesPerRow = 3;
            }
        },
        methods: {
            /*LGSDKEnemySpawner.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LGSDKEnemySpawner#Start", this ); }

                this.SpawnAllEnemies();
            },
            /*LGSDKEnemySpawner.Start end.*/

            /*LGSDKEnemySpawner.SpawnAllEnemies start.*/
            SpawnAllEnemies: function () {
if ( TRACE ) { TRACE( "LGSDKEnemySpawner#SpawnAllEnemies", this ); }

                var $t;
                var totalCount = 0;

                $t = Bridge.getEnumerator(this.enemyConfigs);
                try {
                    while ($t.moveNext()) {
                        var config = $t.Current;
                        for (var i = 0; i < config.quantity; i = (i + 1) | 0) {
                            // Tính vị trí spawn theo hàng ngang, xuống hàng mới sau mỗi enemiesPerRow
                            var posX = this.startX + (totalCount % this.enemiesPerRow) * this.spacingX;
                            var posZ = this.startZ - (((Bridge.Int.div(totalCount, this.enemiesPerRow)) | 0)) * this.spacingX;

                            var spawnPos = new pc.Vec3( posX, 0, posZ );
                            var enemyObj = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, config.enemyPrefab, spawnPos, pc.Quat.IDENTITY.clone());

                            // Thiết lập thông tin bullet và level cho enemy shooter
                            var shooter = enemyObj.GetComponent(LGSDKEnemyShooter);
                            if (UnityEngine.MonoBehaviour.op_Inequality(shooter, null)) {
                                shooter.bulletPrefab = config.bulletPrefab;
                            }
                            totalCount = (totalCount + 1) | 0;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*LGSDKEnemySpawner.SpawnAllEnemies end.*/


        }
    });
    /*LGSDKEnemySpawner end.*/

    /*LGSDKFlowerCharacterController start.*/
    Bridge.define("LGSDKFlowerCharacterController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                OnFollowerTriggerEnter: null
            }
        },
        fields: {
            level: 0,
            damage: 0,
            fireRate: 0,
            maxDistance: 0,
            bulletPrefabsByLevel: null,
            bulletPrefab: null,
            bulletSpawnPoint: null,
            moveSpeed: 0,
            fireCooldown: 0,
            leaderTransform: null,
            offsetFromLeader: null,
            rend: null
        },
        props: {
            Damage: {
                get: function () {
if ( TRACE ) { TRACE( "LGSDKFlowerCharacterController#Damage#get", this ); }

                    return this.damage;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "LGSDKFlowerCharacterController#Damage#set", this ); }

                    this.damage = value;
                }
            },
            Level: {
                get: function () {
if ( TRACE ) { TRACE( "LGSDKFlowerCharacterController#Level#get", this ); }

                    return this.level;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "LGSDKFlowerCharacterController#Level#set", this ); }

                    this.level = value;
                }
            },
            MaxDistance: {
                get: function () {
if ( TRACE ) { TRACE( "LGSDKFlowerCharacterController#MaxDistance#get", this ); }

                    return this.maxDistance;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "LGSDKFlowerCharacterController#MaxDistance#set", this ); }

                    this.maxDistance = value;
                }
            },
            FireRate: {
                get: function () {
if ( TRACE ) { TRACE( "LGSDKFlowerCharacterController#FireRate#get", this ); }

                    return this.fireRate;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "LGSDKFlowerCharacterController#FireRate#set", this ); }

                    this.fireRate = value;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDKFlowerCharacterController#init", this ); }

                this.offsetFromLeader = new UnityEngine.Vector3();
                this.level = 0;
                this.damage = 0.0;
                this.fireRate = 0.0;
                this.maxDistance = 0.0;
                this.moveSpeed = 5.0;
                this.fireCooldown = 0.0;
            }
        },
        methods: {
            /*LGSDKFlowerCharacterController.Initialize start.*/
            Initialize: function (leader, offset) {
if ( TRACE ) { TRACE( "LGSDKFlowerCharacterController#Initialize", this ); }

                this.leaderTransform = leader;
                this.offsetFromLeader = offset.$clone();
            },
            /*LGSDKFlowerCharacterController.Initialize end.*/

            /*LGSDKFlowerCharacterController.start start.*/
            start: function () {
if ( TRACE ) { TRACE( "LGSDKFlowerCharacterController#start", this ); }

                this.rend = this.GetComponent(UnityEngine.Renderer);
                var color = this.rend.material.color.$clone();
                color.a = 0.0; // Tàng hình hoàn toàn
                this.rend.material.color = color.$clone();
                // LGSDKKnockbackManager.Register(transform);
            },
            /*LGSDKFlowerCharacterController.start end.*/

            /*LGSDKFlowerCharacterController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LGSDKFlowerCharacterController#Update", this ); }

                if (UnityEngine.Component.op_Equality(this.leaderTransform, null)) {
                    return;
                }
                // Cập nhật vị trí theo leader + offset
                var targetPos = this.leaderTransform.position.$clone().add( this.offsetFromLeader );
                this.transform.position = new pc.Vec3().lerp( this.transform.position, targetPos, UnityEngine.Time.deltaTime * this.moveSpeed );

                // Bắn đạn liên tục
                this.fireCooldown -= UnityEngine.Time.deltaTime;
                if (this.fireCooldown <= 0.0) {
                    this.Shoot();
                    this.fireCooldown = 100.0 / this.fireRate; // số giây giữa các lần bắn, tính từ fireRate
                }
            },
            /*LGSDKFlowerCharacterController.Update end.*/

            /*LGSDKFlowerCharacterController.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "LGSDKFlowerCharacterController#OnTriggerEnter", this ); }

                var $t;
                // if (other.CompareTag("Saw"))
                // {
                //     LGSDKKnockbackManager.TriggerKnockback();
                // }
                var data = ($t = new LegoSDK.Follower.FollowerEventData(), $t.Follower = this.gameObject, $t.Target = other.gameObject, $t);
                !Bridge.staticEquals(LGSDKFlowerCharacterController.OnFollowerTriggerEnter, null) ? LGSDKFlowerCharacterController.OnFollowerTriggerEnter(data) : null;
            },
            /*LGSDKFlowerCharacterController.OnTriggerEnter end.*/

            /*LGSDKFlowerCharacterController.Shoot start.*/
            Shoot: function () {
if ( TRACE ) { TRACE( "LGSDKFlowerCharacterController#Shoot", this ); }

                if (UnityEngine.Component.op_Equality(this.bulletSpawnPoint, null) || this.bulletPrefabsByLevel.Count === 0) {
                    return;
                }
                var index = Math.max(0, Math.min(((this.level - 1) | 0), ((this.bulletPrefabsByLevel.Count - 1) | 0)));
                var bulletPrefab = this.bulletPrefabsByLevel.getItem(index);
                var bullet = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, bulletPrefab, this.bulletSpawnPoint.position, this.bulletSpawnPoint.rotation);
                var bulletScript = bullet.GetComponent(LGSDKBullet);

                if (UnityEngine.MonoBehaviour.op_Inequality(bulletScript, null)) {
                    if (this.damage > 0.0) {
                        bulletScript.Damage = this.damage;
                    }
                    if (this.maxDistance > 0.0) {
                        bulletScript.MaxDistance = this.maxDistance;
                    }
                    if (this.fireRate > 0.0) {
                        bulletScript.FireRate = this.fireRate;
                    }
                }
                // if (bulletPrefab != null && bulletSpawnPoint != null)
                // {
                //     Instantiate(bulletPrefab, bulletSpawnPoint.position, bulletSpawnPoint.rotation);
                // }
            },
            /*LGSDKFlowerCharacterController.Shoot end.*/


        }
    });
    /*LGSDKFlowerCharacterController end.*/

    /*LGSDKHealthBarFollow start.*/
    Bridge.define("LGSDKHealthBarFollow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            mainCamera: null
        },
        methods: {
            /*LGSDKHealthBarFollow.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LGSDKHealthBarFollow#Start", this ); }

                this.mainCamera = UnityEngine.Camera.main;
            },
            /*LGSDKHealthBarFollow.Start end.*/

            /*LGSDKHealthBarFollow.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "LGSDKHealthBarFollow#LateUpdate", this ); }

                if (UnityEngine.Component.op_Inequality(this.mainCamera, null)) {
                    // Luôn nhìn về camera
                    this.transform.forward = this.mainCamera.transform.forward.$clone();
                }
            },
            /*LGSDKHealthBarFollow.LateUpdate end.*/


        }
    });
    /*LGSDKHealthBarFollow end.*/

    /*LGSDKKnockbackManager start.*/
    Bridge.define("LGSDKKnockbackManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                affectedObjects: null,
                knockbackDistance: 0,
                knockbackDuration: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "LGSDKKnockbackManager#init", this ); }

                    this.affectedObjects = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                    this.knockbackDistance = 5.0;
                    this.knockbackDuration = 0.5;
                }
            },
            methods: {
                /*LGSDKKnockbackManager.Register:static start.*/
                Register: function (obj) {
if ( TRACE ) { TRACE( "LGSDKKnockbackManager#Register", this ); }

                    if (!LGSDKKnockbackManager.affectedObjects.contains(obj)) {
                        LGSDKKnockbackManager.affectedObjects.add(obj);
                    }
                },
                /*LGSDKKnockbackManager.Register:static end.*/

                /*LGSDKKnockbackManager.TriggerKnockback:static start.*/
                TriggerKnockback: function () {
if ( TRACE ) { TRACE( "LGSDKKnockbackManager#TriggerKnockback", this ); }

                    var $t;
                    $t = Bridge.getEnumerator(LGSDKKnockbackManager.affectedObjects);
                    try {
                        while ($t.moveNext()) {
                            var obj = $t.Current;
                            // Sử dụng Coroutine để xử lý hiệu ứng di chuyển
                            obj.gameObject.GetComponent(UnityEngine.MonoBehaviour).StartCoroutine$1(LGSDKKnockbackManager.KnockbackCoroutine(obj));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                },
                /*LGSDKKnockbackManager.TriggerKnockback:static end.*/

                /*LGSDKKnockbackManager.KnockbackCoroutine:static start.*/
                KnockbackCoroutine: function (obj) {
if ( TRACE ) { TRACE( "LGSDKKnockbackManager#KnockbackCoroutine", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        start,
                        end,
                        elapsed,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        start = obj.position.$clone(); // Vị trí ban đầu
                                            end = start.$clone().sub( obj.forward.$clone().clone().scale( LGSDKKnockbackManager.knockbackDistance ) ); // Vị trí sau khi bị đẩy lùi
                                            elapsed = 0.0;

                                            // Di chuyển đối tượng từ vị trí start đến end theo thời gian
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        if ( elapsed < LGSDKKnockbackManager.knockbackDuration ) {
                                                $step = 2;
                                                continue;
                                            } 
                                            $step = 4;
                                            continue;
                                    }
                                    case 2: {
                                        obj.position = new pc.Vec3().lerp( start, end, elapsed / LGSDKKnockbackManager.knockbackDuration );
                                            elapsed += UnityEngine.Time.deltaTime;
                                            $enumerator.current = null;
                                            $step = 3;
                                            return true;
                                    }
                                    case 3: {
                                        
                                            $step = 1;
                                            continue;
                                    }
                                    case 4: {
                                        // Đảm bảo vị trí cuối cùng chính xác
                                            obj.position = end.$clone();

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*LGSDKKnockbackManager.KnockbackCoroutine:static end.*/


            }
        }
    });
    /*LGSDKKnockbackManager end.*/

    /*LGSDKLeaderCharacterController start.*/
    Bridge.define("LGSDKLeaderCharacterController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            events: {
                OnLeaderTriggerEnter: null
            }
        },
        fields: {
            initialFollowers: null,
            level: 0,
            damage: 0,
            maxDistance: 0,
            fireRate: 0,
            LEVEL_UP_DAMAGE: 0,
            LEVEL_UP_MAX_DISTANCE: 0,
            LEVEL_UP_FIRE_RATE: 0,
            bulletPrefabsByLevel: null,
            bulletPrefabsByLevelList: null,
            moveSpeed: 0,
            sideSpeed: 0,
            maxSideOffset: 0,
            touchStartPos: null,
            isSwiping: false,
            bulletSpawnPoint: null,
            fireCooldown: 0,
            currentSideOffset: 0,
            columns: 0,
            spacingX: 0,
            spacingZ: 0,
            flowerCharacterPrefab: null,
            followersPerRing: 0,
            ringSpacing: 0,
            followerRadius: 0,
            followers: null,
            rend: null
        },
        props: {
            Level: {
                get: function () {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#Level#get", this ); }

                    return this.level;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#Level#set", this ); }

                    this.level = value;
                }
            },
            Damage: {
                get: function () {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#Damage#get", this ); }

                    return this.damage;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#Damage#set", this ); }

                    this.damage = value;
                }
            },
            MaxDistance: {
                get: function () {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#MaxDistance#get", this ); }

                    return this.maxDistance;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#MaxDistance#set", this ); }

                    this.maxDistance = value;
                }
            },
            FireRate: {
                get: function () {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#FireRate#get", this ); }

                    return this.fireRate;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#FireRate#set", this ); }

                    this.fireRate = value;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#init", this ); }

                this.touchStartPos = new UnityEngine.Vector2();
                this.level = 1;
                this.damage = 0.0;
                this.maxDistance = 0.0;
                this.fireRate = 50.0;
                this.LEVEL_UP_DAMAGE = 10.0;
                this.LEVEL_UP_MAX_DISTANCE = 5.0;
                this.LEVEL_UP_FIRE_RATE = 10.0;
                this.bulletPrefabsByLevelList = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                this.moveSpeed = 5.0;
                this.sideSpeed = 5.0;
                this.maxSideOffset = 8.0;
                this.isSwiping = false;
                this.fireCooldown = 0.0;
                this.currentSideOffset = 0.0;
                this.columns = 3;
                this.spacingX = 1.0;
                this.spacingZ = 1.2;
                this.followersPerRing = 6;
                this.ringSpacing = 1.5;
                this.followerRadius = 0.5;
                this.followers = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
            }
        },
        methods: {
            /*LGSDKLeaderCharacterController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#Start", this ); }

                var $t;
                this.rend = this.GetComponent(UnityEngine.Renderer);
                var color = this.rend.material.color.$clone();
                color.a = 0.0; // Tàng hình hoàn toàn
                this.rend.material.color = color.$clone();
                LGSDKKnockbackManager.Register(this.transform);

                $t = Bridge.getEnumerator(this.initialFollowers);
                try {
                    while ($t.moveNext()) {
                        var data = $t.Current;
                        this.SpawnCustomFollowers(data.level, data.damage, data.maxDistance, data.fireRate, data.bulletPrefab);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*LGSDKLeaderCharacterController.Start end.*/

            /*LGSDKLeaderCharacterController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#Update", this ); }

                // Di chuyển Leader
                this.transform.Translate$1(new pc.Vec3( 0, 0, 1 ).clone().scale( this.moveSpeed ).clone().scale( UnityEngine.Time.deltaTime ), UnityEngine.Space.World);

                this.HandleSwipeMovement();

                this.currentSideOffset = Math.max(-this.maxSideOffset, Math.min(this.currentSideOffset, this.maxSideOffset));

                var pos = this.transform.position.$clone();
                pos.x = this.currentSideOffset;
                this.transform.position = pos.$clone();

                // Bắn đạn liên tục
                this.fireCooldown -= UnityEngine.Time.deltaTime;
                if (this.fireCooldown <= 0.0) {
                    this.Shoot();
                    this.fireCooldown = 100.0 / this.fireRate;
                }
            },
            /*LGSDKLeaderCharacterController.Update end.*/

            /*LGSDKLeaderCharacterController.HandleSwipeMovement start.*/
            HandleSwipeMovement: function () {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#HandleSwipeMovement", this ); }

                // Dùng cảm ứng trên mobile
                if (UnityEngine.Input.touchCount > 0) {
                    var touch = UnityEngine.Input.GetTouch(0);

                    if (touch.phase === UnityEngine.TouchPhase.Began) {
                        this.touchStartPos = touch.position.$clone();
                        this.isSwiping = true;
                    } else if (touch.phase === UnityEngine.TouchPhase.Moved && this.isSwiping) {
                        var deltaX = touch.position.x - this.touchStartPos.x;
                        var swipeAmount = deltaX / UnityEngine.Screen.width;
                        this.currentSideOffset += swipeAmount * this.sideSpeed;
                        this.touchStartPos = touch.position.$clone();
                    } else if (touch.phase === UnityEngine.TouchPhase.Ended || touch.phase === UnityEngine.TouchPhase.Canceled) {
                        this.isSwiping = false;
                    }
                }
            },
            /*LGSDKLeaderCharacterController.HandleSwipeMovement end.*/

            /*LGSDKLeaderCharacterController.Shoot start.*/
            Shoot: function () {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#Shoot", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.bulletPrefabsByLevel, null) && UnityEngine.Component.op_Inequality(this.bulletSpawnPoint, null)) {
                    var bullet = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.bulletPrefabsByLevel, this.bulletSpawnPoint.position, pc.Quat.IDENTITY.clone());
                    var bulletScript = bullet.GetComponent(LGSDKBullet);
                    if (UnityEngine.MonoBehaviour.op_Inequality(bulletScript, null)) {
                        if (this.Damage > 0.0) {
                            bulletScript.Damage = this.Damage;
                        }
                        if (this.MaxDistance > 0.0) {
                            bulletScript.MaxDistance = this.MaxDistance;
                        }
                        if (this.FireRate > 0.0) {
                            bulletScript.FireRate = this.FireRate;
                        }
                    }
                }
            },
            /*LGSDKLeaderCharacterController.Shoot end.*/

            /*LGSDKLeaderCharacterController.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#OnTriggerEnter", this ); }

                var $t;
                var data = ($t = new LegoSDK.Leader.LeaderEventData(), $t.Leader = this.gameObject, $t.Target = other.gameObject, $t);
                !Bridge.staticEquals(LGSDKLeaderCharacterController.OnLeaderTriggerEnter, null) ? LGSDKLeaderCharacterController.OnLeaderTriggerEnter(data) : null;
            },
            /*LGSDKLeaderCharacterController.OnTriggerEnter end.*/

            /*LGSDKLeaderCharacterController.SpawnCustomFollowers start.*/
            SpawnCustomFollowers: function (level, damage, maxDistance, fireRate, bulletPrefab) {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#SpawnCustomFollowers", this ); }

                var count = this.followers.Count;
                var followersPerRing = 6; // Số follower tối đa trong vòng tròn đầu tiên
                var ringSpacing = 1.2; // Khoảng cách giữa các vòng follower (bán kính tăng dần)

                // Tính vòng hiện tại
                var ring = (Math.floor(Math.sqrt(count / followersPerRing)) + 1) | 0; //Tính số vòng hiện tại dựa trên số follower đã có
                var indexInRing = (count - (Bridge.Int.mul(Bridge.Int.mul((((ring - 1) | 0)), (((ring - 1) | 0))), followersPerRing))) | 0; //Tính vị trí index trong vòng hiện tại
                var maxInThisRing = Bridge.Int.mul(ring, followersPerRing); // Số follower tối đa trong vòng hiện tại (mỗi vòng chứa nhiều hơn)
                var angle = 360.0 * indexInRing / maxInThisRing; // Tính góc chia đều quanh vòng
                var radius = ring * ringSpacing; //Tính bán kính từ leader ra follower

                //Tính toạ độ offset dựa trên góc và bán kính
                var rad = angle * UnityEngine.Mathf.Deg2Rad;
                var offsetX = Math.cos(rad) * radius;
                var offsetZ = Math.sin(rad) * radius;

                var offset = new pc.Vec3( offsetX, 0, offsetZ );
                var spawnPos = this.transform.position.$clone().add( offset ); // Tính vị trí spawn từ vị trí Leader cộng offset

                var follower = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.flowerCharacterPrefab, spawnPos, pc.Quat.IDENTITY.clone()); // Tạo follower

                //Gán thông tin cho controller nếu có
                var controller = follower.GetComponent(LGSDKFlowerCharacterController);
                if (UnityEngine.MonoBehaviour.op_Inequality(controller, null)) {
                    controller.Initialize(this.transform, offset);
                    if (level > 0.0) {
                        controller.Level = level;
                    }
                    if (damage > 0.0) {
                        controller.Damage = damage;
                    }
                    if (maxDistance > 0.0) {
                        controller.MaxDistance = maxDistance;
                    }
                    if (fireRate > 0.0) {
                        controller.FireRate = fireRate;
                    }

                    var chosenBulletPrefab = bulletPrefab;
                    if (UnityEngine.GameObject.op_Equality(chosenBulletPrefab, null) && level <= this.bulletPrefabsByLevelList.Count) {
                        var index = UnityEngine.Mathf.Max(((level - 1) | 0), 0);
                        chosenBulletPrefab = this.bulletPrefabsByLevelList.getItem(index);
                    }
                    controller.bulletPrefabsByLevel = function (_o1) {
                            _o1.add(chosenBulletPrefab);
                            return _o1;
                        }(new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor());
                }

                this.followers.add(follower);
            },
            /*LGSDKLeaderCharacterController.SpawnCustomFollowers end.*/

            /*LGSDKLeaderCharacterController.AddNewFollower start.*/
            AddNewFollower: function () {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#AddNewFollower", this ); }

                var newDamage = this.Damage;
                var newMaxDistance = this.MaxDistance;
                var newFireRate = this.FireRate;
                var newLevel = this.Level;
                var newBulletPrefab = this.bulletPrefabsByLevel;

                if (this.followers.Count > 0) {
                    var firstFollower = this.followers.getItem(0).GetComponent(LGSDKFlowerCharacterController);
                    if (UnityEngine.MonoBehaviour.op_Inequality(firstFollower, null)) {
                        newDamage = firstFollower.Damage;
                        newMaxDistance = firstFollower.MaxDistance;
                        newFireRate = firstFollower.FireRate;
                        newLevel = firstFollower.Level;
                        newBulletPrefab = this.bulletPrefabsByLevelList.getItem(UnityEngine.Mathf.Max(((firstFollower.Level - 1) | 0), 0));
                    }
                }
                this.SpawnCustomFollowers(newLevel, newDamage, newMaxDistance, newFireRate, newBulletPrefab);
            },
            /*LGSDKLeaderCharacterController.AddNewFollower end.*/

            /*LGSDKLeaderCharacterController.RemoveLastFollower start.*/
            RemoveLastFollower: function () {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#RemoveLastFollower", this ); }

                if (this.followers.Count > 0) {
                    var lastFollower = this.followers.getItem(((this.followers.Count - 1) | 0));
                    this.followers.removeAt(((this.followers.Count - 1) | 0));
                    UnityEngine.MonoBehaviour.Destroy(lastFollower);
                    UnityEngine.Debug.Log$1("Removed last follower");
                }
            },
            /*LGSDKLeaderCharacterController.RemoveLastFollower end.*/

            /*LGSDKLeaderCharacterController.GetFollowerCount start.*/
            GetFollowerCount: function () {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#GetFollowerCount", this ); }

                return this.followers.Count;
            },
            /*LGSDKLeaderCharacterController.GetFollowerCount end.*/

            /*LGSDKLeaderCharacterController.UpgradeLevel start.*/
            UpgradeLevel: function () {
if ( TRACE ) { TRACE( "LGSDKLeaderCharacterController#UpgradeLevel", this ); }

                var $t;
                this.Level = (this.Level + 1) | 0;
                this.Damage += this.LEVEL_UP_DAMAGE;
                this.MaxDistance += this.LEVEL_UP_MAX_DISTANCE;
                this.FireRate += this.LEVEL_UP_FIRE_RATE;

                // Cập nhật bullet prefab cho leader
                if (this.Level <= this.bulletPrefabsByLevelList.Count) {
                    var newBulletPrefab = this.bulletPrefabsByLevelList.getItem(((this.Level - 1) | 0));
                    this.bulletPrefabsByLevel = newBulletPrefab;
                }

                // Cập nhật level và bullet prefab cho tất cả follower
                $t = Bridge.getEnumerator(this.followers);
                try {
                    while ($t.moveNext()) {
                        var follower = $t.Current;
                        if (UnityEngine.GameObject.op_Inequality(follower, null)) {
                            var controller = follower.GetComponent(LGSDKFlowerCharacterController);
                            if (UnityEngine.MonoBehaviour.op_Inequality(controller, null)) {
                                controller.Level = (controller.Level + 1) | 0;
                                controller.Damage += this.LEVEL_UP_DAMAGE;
                                controller.MaxDistance += this.LEVEL_UP_MAX_DISTANCE;
                                controller.FireRate += this.LEVEL_UP_FIRE_RATE;

                                if (controller.Level <= this.bulletPrefabsByLevelList.Count) {
                                    var newBulletPrefab1 = { v : this.bulletPrefabsByLevelList.getItem(((controller.Level - 1) | 0)) };
                                    controller.bulletPrefabsByLevel = (function ($me, newBulletPrefab1) {
                                            return function (_o1) {
                                                _o1.add(newBulletPrefab1.v);
                                                return _o1;
                                            };
                                        })(this, newBulletPrefab1)(new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor());
                                }
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*LGSDKLeaderCharacterController.UpgradeLevel end.*/


        }
    });
    /*LGSDKLeaderCharacterController end.*/

    /*LGSDKLoot start.*/
    Bridge.define("LGSDKLoot", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            layers: null,
            damagePopupPrefab: null,
            hitPoint: null,
            currentLayerIndex: 0,
            currentBrickIndex: 0,
            totalExperience: 0,
            currentXP: 0,
            totalBricks: 0,
            brokenBricks: 0,
            timeBrickBreak: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDKLoot#init", this ); }

                this.layers = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                this.currentLayerIndex = 0;
                this.currentBrickIndex = 0;
                this.totalExperience = 0;
                this.currentXP = 0;
                this.timeBrickBreak = 0.0;
            }
        },
        methods: {
            /*LGSDKLoot.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LGSDKLoot#Start", this ); }

                this.totalBricks = this.CountAllBricks();
                this.brokenBricks = 0;
            },
            /*LGSDKLoot.Start end.*/

            /*LGSDKLoot.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "LGSDKLoot#OnTriggerEnter", this ); }

                //if (other.CompareTag("LeaderCharacter"))
                //{
                //    // Bắn ra va chạm với charactor ra bên ngoài.
                //    var eventData = new LGSDKLootEventData
                //    {
                //        Loot = gameObject,
                //        Target = other.gameObject,
                //        Experience = 0 // Khi va vào Player không tăng XP
                //    };
                //    LGSDKPropManager.TriggerLootCharactorEnter(eventData);

                //    Destroy(gameObject);
                //}
                //else if (other.CompareTag("BulletLv1"))
                //{
                //    // Tăng kinh nghiệm và hiển thị damage bullet.
                //    totalExperience++;
                //    if (damagePopupPrefab != null && hitPoint != null)
                //    {
                //        GameObject popup = Instantiate(
                //            damagePopupPrefab,
                //            hitPoint.position + Vector3.up * 0.5f,
                //            Quaternion.identity
                //        );
                //        popup.GetComponent<LGSDKDamagePopup>().SetDamage(totalExperience);
                //    }

                //    Destroy(other.gameObject);

                //    // Xử lý phá hủy bricks.
                //    currentLayerIndex = 0;
                //    currentBrickIndex = 0;
                //    BreakNextBrick();

                //}
            },
            /*LGSDKLoot.OnTriggerEnter end.*/

            /*LGSDKLoot.HandleBulletCollision start.*/
            HandleBulletCollision: function (bullet, hitPoint) {
if ( TRACE ) { TRACE( "LGSDKLoot#HandleBulletCollision", this ); }

                // Tăng kinh nghiệm và hiển thị damage bullet
                this.totalExperience = (this.totalExperience + 1) | 0;
                if (UnityEngine.GameObject.op_Inequality(this.damagePopupPrefab, null) && UnityEngine.Component.op_Inequality(hitPoint, null)) {
                    var popup = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.damagePopupPrefab, hitPoint.position.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.5 ) ), pc.Quat.IDENTITY.clone());
                    popup.GetComponent(LGSDKDamagePopup).SetDamage(this.totalExperience);
                }

                UnityEngine.MonoBehaviour.Destroy(bullet);

                // Xử lý phá hủy bricks
                this.currentLayerIndex = 0;
                this.currentBrickIndex = 0;
                this.BreakNextBrick();

                // Bắn ra sự kiện va chạm
                //var eventData = new LGSDKLootEventData
                //{
                //    Loot = gameObject,
                //    Target = bullet,
                //    Layers = layers,
                //    HitPoint = hitPoint,
                //    DamePopup = damagePopupPrefab,
                //    Experience = 1 // Tạm thời là 1, sau có thể truyền từ bullet
                //};
                //LGSDKPropManager.TriggerLootBulletEnter(eventData);
            },
            /*LGSDKLoot.HandleBulletCollision end.*/

            /*LGSDKLoot.BreakNextBrick start.*/
            BreakNextBrick: function () {
if ( TRACE ) { TRACE( "LGSDKLoot#BreakNextBrick", this ); }

                UnityEngine.Debug.Log$1(System.String.format("currentLayerIndex | count layer:  + {0} | {1}", Bridge.box(this.currentLayerIndex, System.Int32), Bridge.box(this.layers.Count, System.Int32)));
                if (this.currentLayerIndex >= this.layers.Count) {
                    return;
                }

                var layer = this.layers.getItem(this.currentLayerIndex);
                if (layer.childCount === 0) {
                    this.currentLayerIndex = (this.currentLayerIndex + 1) | 0;
                    this.currentBrickIndex = 0;
                    this.BreakNextBrick(); // chuyển sang layer tiếp theo
                    return;
                }

                if (this.currentBrickIndex >= layer.childCount) {
                    this.currentLayerIndex = (this.currentLayerIndex + 1) | 0;
                    this.currentBrickIndex = 0;
                    this.BreakNextBrick();
                    return;
                }

                var brick = layer.GetChild(this.currentBrickIndex);
                this.currentBrickIndex = (this.currentBrickIndex + 1) | 0;

                this.BreakBrick(brick.gameObject);
            },
            /*LGSDKLoot.BreakNextBrick end.*/

            /*LGSDKLoot.BreakBrick start.*/
            BreakBrick: function (brick) {
if ( TRACE ) { TRACE( "LGSDKLoot#BreakBrick", this ); }

                var rb = brick.GetComponent(UnityEngine.Rigidbody);
                if (UnityEngine.Component.op_Equality(rb, null)) {
                    rb = brick.AddComponent(UnityEngine.Rigidbody);
                }

                rb.useGravity = true;
                rb.AddForce$1(UnityEngine.Random.onUnitSphere.$clone().clone().scale( 18.0 ), UnityEngine.ForceMode.Impulse);

                this.brokenBricks = (this.brokenBricks + 1) | 0;

                // Xử lý xóa Loot khi hết brick.
                if (this.brokenBricks >= this.totalBricks) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }

                this.Destroy(brick, this.timeBrickBreak); // xóa sau 0.5 giây
            },
            /*LGSDKLoot.BreakBrick end.*/

            /*LGSDKLoot.CountAllBricks start.*/
            CountAllBricks: function () {
if ( TRACE ) { TRACE( "LGSDKLoot#CountAllBricks", this ); }

                var $t;
                var count = 0;
                $t = Bridge.getEnumerator(this.layers);
                try {
                    while ($t.moveNext()) {
                        var layer = $t.Current;
                        count = (count + layer.childCount) | 0;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return count;
            },
            /*LGSDKLoot.CountAllBricks end.*/


        }
    });
    /*LGSDKLoot end.*/

    /*LGSDKWarriorPrison start.*/
    Bridge.define("LGSDKWarriorPrison", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            warriors: null,
            levelBar: null,
            levelText: null,
            currentExp: 0,
            expToLevelUp: 0,
            currentLevel: 0
        },
        methods: {
            /*LGSDKWarriorPrison.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "LGSDKWarriorPrison#Awake", this ); }

                this.UpdateLevelBar();
            },
            /*LGSDKWarriorPrison.Awake end.*/

            /*LGSDKWarriorPrison.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "LGSDKWarriorPrison#OnTriggerEnter", this ); }

                //if (other.CompareTag("BulletLv1"))
                //{
                //    currentExp++;
                //    UpdateLevelBar();

                //    if (currentExp >= expToLevelUp)
                //    {
                //        LevelUp();
                //    }

                //    // Bắn event va chạm.
                //    var data = new LGSDKWarriorPrisonEventData
                //    {
                //        Prison = this.gameObject,
                //        Target = other.gameObject,
                //        Warriors = warriors,
                //        Level = currentLevel
                //    };

                //    LGSDKPropManager.TriggerWarriorPrisonBulletEnter(data);
                //}
                //else if (other.CompareTag("LeaderCharacter"))
                //{
                //    foreach (var warrior in warriors)
                //    {
                //        // Tách ra khỏi Prison
                //        warrior.transform.parent = null;
                //        warrior.ReleaseWarrior();
                //    }

                //    gameObject.SetActive(false);
                //}
            },
            /*LGSDKWarriorPrison.OnTriggerEnter end.*/

            /*LGSDKWarriorPrison.HandleLeaderCharacterCollision start.*/
            HandleLeaderCharacterCollision: function (leaderCharacter) {
if ( TRACE ) { TRACE( "LGSDKWarriorPrison#HandleLeaderCharacterCollision", this ); }

                var $t, $t1;
                // Tách các warrior ra khỏi Prison
                $t = Bridge.getEnumerator(this.warriors);
                try {
                    while ($t.moveNext()) {
                        var warrior = $t.Current;
                        warrior.transform.parent = null;
                        warrior.ReleaseWarrior();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                // Tạo và bắn sự kiện
                var data = ($t1 = new LegoSDK.Prop.LGSDKWarriorPrisonEventData(), $t1.Prison = this.gameObject, $t1.Target = leaderCharacter, $t1.Warriors = this.warriors, $t1.Level = this.currentLevel, $t1);

                LegoSDK.Prop.LGSDKPropManager.TriggerWarriorPrisonCharactorEnter(data);

                // Vô hiệu hóa Prison
                this.gameObject.SetActive(false);
            },
            /*LGSDKWarriorPrison.HandleLeaderCharacterCollision end.*/

            /*LGSDKWarriorPrison.HandleBulletCollision start.*/
            HandleBulletCollision: function (bullet) {
if ( TRACE ) { TRACE( "LGSDKWarriorPrison#HandleBulletCollision", this ); }

                var $t;
                // Cộng kinh nghiệm
                this.currentExp = (this.currentExp + 1) | 0;
                this.UpdateLevelBar();

                // Kiểm tra lên cấp
                if (this.currentExp >= this.expToLevelUp) {
                    this.LevelUp();
                }

                // Gửi sự kiện va chạm với bullet
                var data = ($t = new LegoSDK.Prop.LGSDKWarriorPrisonEventData(), $t.Prison = this.gameObject, $t.Target = bullet, $t.Warriors = this.warriors, $t.Level = this.currentLevel, $t);

                LegoSDK.Prop.LGSDKPropManager.TriggerWarriorPrisonBulletEnter(data);
            },
            /*LGSDKWarriorPrison.HandleBulletCollision end.*/

            /*LGSDKWarriorPrison.UpdateLevelBar start.*/
            UpdateLevelBar: function () {
if ( TRACE ) { TRACE( "LGSDKWarriorPrison#UpdateLevelBar", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.levelBar, null)) {
                    this.levelBar.value = this.currentExp / this.expToLevelUp;
                    this.levelText.text = System.String.format("Level {0}", [Bridge.box(this.currentLevel, System.Int32)]);
                }
            },
            /*LGSDKWarriorPrison.UpdateLevelBar end.*/

            /*LGSDKWarriorPrison.LevelUp start.*/
            LevelUp: function () {
if ( TRACE ) { TRACE( "LGSDKWarriorPrison#LevelUp", this ); }

                var $t;
                this.currentLevel = (this.currentLevel + 1) | 0;
                this.currentExp = 0;
                this.UpdateLevelBar();
                $t = Bridge.getEnumerator(this.warriors);
                try {
                    while ($t.moveNext()) {
                        var warrior = $t.Current;
                        warrior.LevelUp();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*LGSDKWarriorPrison.LevelUp end.*/


        }
    });
    /*LGSDKWarriorPrison end.*/

    /*LootCollector start.*/
    Bridge.define("LootCollector", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            totalExperience: 0,
            currentXP: 0,
            maxXP: 0,
            currentLayerIndex: 0,
            currentBrickIndex: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LootCollector#init", this ); }

                this.totalExperience = 0;
                this.currentXP = 0;
                this.maxXP = 30;
                this.currentLayerIndex = 0;
                this.currentBrickIndex = 0;
            }
        },
        methods: {
            /*LootCollector.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "LootCollector#OnEnable", this ); }

                LegoSDK.Prop.LGSDKPropManager.addOnLootTriggerCharactorEnter(Bridge.fn.cacheBind(this, this.HandleLootCharactorTrigger));
                LegoSDK.Prop.LGSDKPropManager.addOnLootTriggerBulletEnter(Bridge.fn.cacheBind(this, this.HandleLootBulletTrigger));
            },
            /*LootCollector.OnEnable end.*/

            /*LootCollector.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "LootCollector#OnDisable", this ); }

                LegoSDK.Prop.LGSDKPropManager.removeOnLootTriggerCharactorEnter(Bridge.fn.cacheBind(this, this.HandleLootCharactorTrigger));
                LegoSDK.Prop.LGSDKPropManager.removeOnLootTriggerBulletEnter(Bridge.fn.cacheBind(this, this.HandleLootBulletTrigger));
            },
            /*LootCollector.OnDisable end.*/

            /*LootCollector.HandleLootCharactorTrigger start.*/
            HandleLootCharactorTrigger: function (data) {
if ( TRACE ) { TRACE( "LootCollector#HandleLootCharactorTrigger", this ); }

                UnityEngine.MonoBehaviour.Destroy(data.Loot);
            },
            /*LootCollector.HandleLootCharactorTrigger end.*/

            /*LootCollector.HandleLootBulletTrigger start.*/
            HandleLootBulletTrigger: function (data) {
if ( TRACE ) { TRACE( "LootCollector#HandleLootBulletTrigger", this ); }

                var hitPoint = data.HitPoint;
                var damagePopupPrefab = data.DamePopup;
                this.AddExperience(data);
                if (UnityEngine.GameObject.op_Inequality(damagePopupPrefab, null) && UnityEngine.Component.op_Inequality(hitPoint, null)) {
                    var popup = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, damagePopupPrefab, hitPoint.position.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.5 ) ), pc.Quat.IDENTITY.clone());
                    popup.GetComponent(LGSDKDamagePopup).SetDamage(data.Experience);
                }
                UnityEngine.MonoBehaviour.Destroy(data.Target);
            },
            /*LootCollector.HandleLootBulletTrigger end.*/

            /*LootCollector.AddExperience start.*/
            AddExperience: function (data) {
if ( TRACE ) { TRACE( "LootCollector#AddExperience", this ); }

                this.totalExperience = (this.totalExperience + data.Experience) | 0;

                if (this.totalExperience >= this.maxXP) {
                    this.currentLayerIndex = 0;
                    this.currentBrickIndex = 0;
                    UnityEngine.MonoBehaviour.Destroy(data.Loot);
                }
                this.BreakNextBrick(data);
            },
            /*LootCollector.AddExperience end.*/

            /*LootCollector.BreakNextBrick start.*/
            BreakNextBrick: function (data) {
if ( TRACE ) { TRACE( "LootCollector#BreakNextBrick", this ); }

                var layers = data.Layers;
                if (this.currentLayerIndex >= layers.Count) {
                    return;
                }

                var layer = layers.getItem(this.currentLayerIndex);
                UnityEngine.Debug.Log$1("layer | loot:" + (layer.name || "") + "|" + (data.Loot.name || ""));
                UnityEngine.Debug.Log$1("currentLayerIndex | currentBrickIndex:" + this.currentLayerIndex + "|" + this.currentBrickIndex);
                if (layer.childCount === 0) {
                    this.currentLayerIndex = (this.currentLayerIndex + 1) | 0;
                    this.currentBrickIndex = 0;
                    this.BreakNextBrick(data); // chuyển sang layer tiếp theo
                    return;
                }

                if (this.currentBrickIndex >= layer.childCount) {
                    this.currentLayerIndex = (this.currentLayerIndex + 1) | 0;
                    this.currentBrickIndex = 0;
                    this.BreakNextBrick(data);
                    return;
                }

                var brick = layer.GetChild(this.currentBrickIndex);
                UnityEngine.Debug.Log$1("brick | layer | loot:" + (brick.name || "") + "|" + (layer.name || "") + "|" + (data.Loot.name || ""));
                UnityEngine.Debug.Log$1("currentLayerIndex222 | currentBrickIndex222:" + this.currentLayerIndex + "|" + this.currentBrickIndex);
                this.currentBrickIndex = (this.currentBrickIndex + 1) | 0;

                this.BreakBrick(brick.gameObject);
            },
            /*LootCollector.BreakNextBrick end.*/

            /*LootCollector.BreakBrick start.*/
            BreakBrick: function (brick) {
if ( TRACE ) { TRACE( "LootCollector#BreakBrick", this ); }

                var rb = brick.GetComponent(UnityEngine.Rigidbody);
                if (UnityEngine.Component.op_Equality(rb, null)) {
                    rb = brick.AddComponent(UnityEngine.Rigidbody);
                }

                rb.useGravity = true;
                rb.AddForce$1(UnityEngine.Random.onUnitSphere.$clone().clone().scale( 3.0 ), UnityEngine.ForceMode.Impulse);

                this.Destroy(brick, 2.0); // xóa sau 2 giây
            },
            /*LootCollector.BreakBrick end.*/


        }
    });
    /*LootCollector end.*/

    /*TMPForceLoader start.*/
    Bridge.define("TMPForceLoader", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*TMPForceLoader.LoadTMPSettings:static start.*/
                LoadTMPSettings: function () {
if ( TRACE ) { TRACE( "TMPForceLoader#LoadTMPSettings", this ); }

                    var load = TMPro.TMP_Settings.instance;
                },
                /*TMPForceLoader.LoadTMPSettings:static end.*/


            }
        }
    });
    /*TMPForceLoader end.*/

    /*TowerBrickController start.*/
    Bridge.define("TowerBrickController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            layers: null,
            currentLayerIndex: 0,
            currentBrickIndex: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TowerBrickController#init", this ); }

                this.layers = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                this.currentLayerIndex = 0;
                this.currentBrickIndex = 0;
            }
        },
        methods: {
            /*TowerBrickController.BreakNextBrick start.*/
            BreakNextBrick: function () {
if ( TRACE ) { TRACE( "TowerBrickController#BreakNextBrick", this ); }

                if (this.currentLayerIndex >= this.layers.Count) {
                    return;
                }

                var layer = this.layers.getItem(this.currentLayerIndex);
                if (layer.childCount === 0) {
                    this.currentLayerIndex = (this.currentLayerIndex + 1) | 0;
                    this.currentBrickIndex = 0;
                    this.BreakNextBrick(); // chuyển sang layer tiếp theo
                    return;
                }

                if (this.currentBrickIndex >= layer.childCount) {
                    this.currentLayerIndex = (this.currentLayerIndex + 1) | 0;
                    this.currentBrickIndex = 0;
                    this.BreakNextBrick();
                    return;
                }

                var brick = layer.GetChild(this.currentBrickIndex);
                this.currentBrickIndex = (this.currentBrickIndex + 1) | 0;

                this.BreakBrick(brick.gameObject);
            },
            /*TowerBrickController.BreakNextBrick end.*/

            /*TowerBrickController.BreakBrick start.*/
            BreakBrick: function (brick) {
if ( TRACE ) { TRACE( "TowerBrickController#BreakBrick", this ); }

                var rb = brick.GetComponent(UnityEngine.Rigidbody);
                if (UnityEngine.Component.op_Equality(rb, null)) {
                    rb = brick.AddComponent(UnityEngine.Rigidbody);
                }

                rb.useGravity = true;
                rb.AddForce$1(UnityEngine.Random.onUnitSphere.$clone().clone().scale( 3.0 ), UnityEngine.ForceMode.Impulse);

                this.Destroy(brick, 2.0); // xóa sau 2 giây
            },
            /*TowerBrickController.BreakBrick end.*/


        }
    });
    /*TowerBrickController end.*/

    /*TowerDamageHandler start.*/
    Bridge.define("TowerDamageHandler", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            maxHealth: 0,
            amount: 0,
            currentHealth: 0,
            totalDamage: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "TowerDamageHandler#init", this ); }

                this.maxHealth = 100;
                this.amount = 10;
                this.totalDamage = 0;
            }
        },
        methods: {
            /*TowerDamageHandler.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "TowerDamageHandler#Start", this ); }

                this.currentHealth = this.maxHealth;
            },
            /*TowerDamageHandler.Start end.*/

            /*TowerDamageHandler.TakeDamage start.*/
            TakeDamage: function () {
if ( TRACE ) { TRACE( "TowerDamageHandler#TakeDamage", this ); }

                this.currentHealth = (this.currentHealth - this.amount) | 0;
                UnityEngine.Debug.Log$1("Tr\u1ee5 b\u1ecb tr\u00fang \u0111\u00f2n. M\u00e1u c\u00f2n l\u1ea1i: " + this.currentHealth);

                this.totalDamage = (this.totalDamage + this.amount) | 0;
                UnityEngine.Debug.Log$1("T\u1ed5ng Damage: " + this.totalDamage);

                if (this.currentHealth <= 0) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    UnityEngine.Debug.Log$1("Tr\u1ee5 \u0111\u00e3 b\u1ecb ph\u00e1 h\u1ee7y!");
                }
            },
            /*TowerDamageHandler.TakeDamage end.*/


        }
    });
    /*TowerDamageHandler end.*/

    /*TowerTestController start.*/
    Bridge.define("TowerTestController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tower: null,
            TowerBrick: null,
            damagePopupPrefab: null,
            hitPoint: null
        },
        methods: {
            /*TowerTestController.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "TowerTestController#OnTriggerEnter", this ); }

                UnityEngine.Debug.Log$1("co va cham xay ra");
                if (Bridge.referenceEquals(other.tag, "Follower") || Bridge.referenceEquals(other.tag, "LeaderCharacter")) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }

                if (Bridge.referenceEquals(other.tag, "BulletLv1") || Bridge.referenceEquals(other.tag, "BulletLv2") || Bridge.referenceEquals(other.tag, "BulletLv3")) {
                    this.SimulateKnifeHit();
                }
            },
            /*TowerTestController.OnTriggerEnter end.*/

            /*TowerTestController.SimulateKnifeHit start.*/
            SimulateKnifeHit: function () {
if ( TRACE ) { TRACE( "TowerTestController#SimulateKnifeHit", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.tower, null)) {
                    this.tower.TakeDamage();

                    // Gọi phá gạch
                    this.TowerBrick.BreakNextBrick();
                }

                if (UnityEngine.GameObject.op_Inequality(this.damagePopupPrefab, null) && UnityEngine.Component.op_Inequality(this.hitPoint, null)) {
                    var popup = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.damagePopupPrefab, this.hitPoint.position.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.5 ) ), pc.Quat.IDENTITY.clone());
                    popup.GetComponent(LGSDKDamagePopup).SetDamage(this.tower.amount);
                }
            },
            /*TowerTestController.SimulateKnifeHit end.*/


        }
    });
    /*TowerTestController end.*/

    /*WarriorPrisonCollector start.*/
    Bridge.define("WarriorPrisonCollector", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            warriors: null,
            releasePositions: null,
            level: 0,
            levelBar: null,
            currentLevel: 0,
            currentExp: 0,
            expToLevelUp: 0,
            levelText: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "WarriorPrisonCollector#init", this ); }

                this.level = 0;
                this.currentLevel = 1;
                this.currentExp = 1;
                this.expToLevelUp = 3;
            }
        },
        methods: {
            /*WarriorPrisonCollector.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "WarriorPrisonCollector#OnEnable", this ); }

                LegoSDK.Prop.LGSDKPropManager.addOnWarriorPrisonTriggerBulletEnter(Bridge.fn.cacheBind(this, this.HandleWarriorPrisonBulletTrigger));
                LegoSDK.Prop.LGSDKPropManager.addOnWarriorPrisonTriggerCharactorEnter(Bridge.fn.cacheBind(this, this.HandleWarriorPrisonCharactorTrigger));
            },
            /*WarriorPrisonCollector.OnEnable end.*/

            /*WarriorPrisonCollector.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "WarriorPrisonCollector#OnDisable", this ); }

                LegoSDK.Prop.LGSDKPropManager.removeOnWarriorPrisonTriggerBulletEnter(Bridge.fn.cacheBind(this, this.HandleWarriorPrisonBulletTrigger));
                LegoSDK.Prop.LGSDKPropManager.addOnWarriorPrisonTriggerCharactorEnter(Bridge.fn.cacheBind(this, this.HandleWarriorPrisonCharactorTrigger));
            },
            /*WarriorPrisonCollector.OnDisable end.*/

            /*WarriorPrisonCollector.HandleWarriorPrisonCharactorTrigger start.*/
            HandleWarriorPrisonCharactorTrigger: function (data) {
if ( TRACE ) { TRACE( "WarriorPrisonCollector#HandleWarriorPrisonCharactorTrigger", this ); }

                var $t;
                this.ReleaseWarriors(data);
                $t = Bridge.getEnumerator(data.Warriors);
                try {
                    while ($t.moveNext()) {
                        var warrior = $t.Current;
                        warrior.transform.SetParent(null); // Hoặc về transform gốc trong scene
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                UnityEngine.MonoBehaviour.Destroy(data.Prison);
            },
            /*WarriorPrisonCollector.HandleWarriorPrisonCharactorTrigger end.*/

            /*WarriorPrisonCollector.HandleWarriorPrisonBulletTrigger start.*/
            HandleWarriorPrisonBulletTrigger: function (data) {
if ( TRACE ) { TRACE( "WarriorPrisonCollector#HandleWarriorPrisonBulletTrigger", this ); }

                if (UnityEngine.GameObject.op_Equality(this.gameObject, data.Prison)) {
                    this.currentExp = (this.currentExp + 1) | 0;
                    this.UpdateLevelBar();

                    if (this.currentExp >= this.expToLevelUp) {
                        this.LevelUp(data);
                    }
                }
            },
            /*WarriorPrisonCollector.HandleWarriorPrisonBulletTrigger end.*/

            /*WarriorPrisonCollector.UpdateLevelBar start.*/
            UpdateLevelBar: function () {
if ( TRACE ) { TRACE( "WarriorPrisonCollector#UpdateLevelBar", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.levelBar, null)) {
                    this.levelBar.value = this.currentExp / this.expToLevelUp;
                    this.levelText.text = System.String.format("Level {0}", [Bridge.box(this.currentLevel, System.Int32)]);
                }
            },
            /*WarriorPrisonCollector.UpdateLevelBar end.*/

            /*WarriorPrisonCollector.LevelUp start.*/
            LevelUp: function (data) {
if ( TRACE ) { TRACE( "WarriorPrisonCollector#LevelUp", this ); }

                var $t;
                this.currentLevel = (this.currentLevel + 1) | 0;
                this.currentExp = 0;
                this.UpdateLevelBar();
                $t = Bridge.getEnumerator(data.Warriors);
                try {
                    while ($t.moveNext()) {
                        var warrior = $t.Current;
                        warrior.LevelUp();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*WarriorPrisonCollector.LevelUp end.*/

            /*WarriorPrisonCollector.ReleaseWarriors start.*/
            ReleaseWarriors: function (data) {
if ( TRACE ) { TRACE( "WarriorPrisonCollector#ReleaseWarriors", this ); }

                for (var i = 0; i < data.Warriors.Count; i = (i + 1) | 0) {
                    var warrior = data.Warriors.getItem(i);

                    // Giả sử bạn có mảng các waypoints cho mỗi warrior
                    var path = this.GetWaypointsForWarrior(i, data);

                    //warrior.MoveAlongPath();
                }
            },
            /*WarriorPrisonCollector.ReleaseWarriors end.*/

            /*WarriorPrisonCollector.GetWaypointsForWarrior start.*/
            GetWaypointsForWarrior: function (index, data) {
if ( TRACE ) { TRACE( "WarriorPrisonCollector#GetWaypointsForWarrior", this ); }

                var $t, $t1, $t2;
                var baseIndex = Bridge.Int.mul(index, 3);

                if (System.Linq.Enumerable.from(data.ReleasePositions, UnityEngine.Transform).count() < ((baseIndex + 3) | 0)) {
                    UnityEngine.Debug.LogError$2(System.String.format("Kh\u00f4ng \u0111\u1ee7 waypoint cho warrior {0}, c\u1ea7n \u00edt nh\u1ea5t {1}, hi\u1ec7n c\u00f3 {2}", Bridge.box(index, System.Int32), Bridge.box(((baseIndex + 3) | 0), System.Int32), Bridge.box(System.Linq.Enumerable.from(data.ReleasePositions, UnityEngine.Transform).count(), System.Int32)));
                    return System.Array.init(0, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3); // hoặc trả về null
                }

                return System.Array.init([($t = data.ReleasePositions)[baseIndex].position.$clone(), ($t1 = data.ReleasePositions)[((baseIndex + 1) | 0)].position.$clone(), ($t2 = data.ReleasePositions)[((baseIndex + 2) | 0)].position.$clone()], UnityEngine.Vector3);
            },
            /*WarriorPrisonCollector.GetWaypointsForWarrior end.*/


        }
    });
    /*WarriorPrisonCollector end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleIdleBehavior start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKObstacleIdleBehavior", {
        inherits: [UnityEngine.MonoBehaviour,LGSDK.TimelineUp.Obstacles.ILGSDKObstacleBehavior],
        alias: ["UpdateBehavior", "LGSDK$TimelineUp$Obstacles$ILGSDKObstacleBehavior$UpdateBehavior"],
        methods: {
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleIdleBehavior.UpdateBehavior start.*/
            UpdateBehavior: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleIdleBehavior#UpdateBehavior", this ); }


            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleIdleBehavior.UpdateBehavior end.*/


        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleIdleBehavior end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock", {
        inherits: [LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle],
        methods: {
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock.InitializeObstacleType start.*/
            InitializeObstacleType: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock#InitializeObstacleType", this ); }

                this.ObstacleType = LGSDK.TimelineUp.Obstacles.LGSDKObstacleType.Lock;
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock.InitializeObstacleType end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock#Initialize", this ); }

                this.health = 50.0;
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock.Initialize end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock.HandleDestroy start.*/
            HandleDestroy: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock#HandleDestroy", this ); }

                // Bắn event khi ổ khóa mở
                this.TriggerEffect(new LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs.ctor(this.ObstacleType, LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType.LockOpened, this.gameObject));
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock.HandleDestroy end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock.TakeDamage start.*/
            TakeDamage: function (damage) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock#TakeDamage", this ); }

                LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.prototype.TakeDamage.call(this, damage);
                this.UpdateHealthDisplay();
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock.TakeDamage end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock.UpdateHealthDisplay start.*/
            UpdateHealthDisplay: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock#UpdateHealthDisplay", this ); }

                UnityEngine.Debug.Log$1(System.String.format("Steel Barrel Health: {0}", [Bridge.box(this.health, System.Single, System.Single.format, System.Single.getHashCode)]));
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock.UpdateHealthDisplay end.*/


        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleRotatorBehavior start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKObstacleRotatorBehavior", {
        inherits: [UnityEngine.MonoBehaviour,LGSDK.TimelineUp.Obstacles.ILGSDKObstacleBehavior],
        fields: {
            rotationSpeed: 0
        },
        alias: ["UpdateBehavior", "LGSDK$TimelineUp$Obstacles$ILGSDKObstacleBehavior$UpdateBehavior"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleRotatorBehavior#init", this ); }

                this.rotationSpeed = 180.0;
            }
        },
        methods: {
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleRotatorBehavior.UpdateBehavior start.*/
            UpdateBehavior: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleRotatorBehavior#UpdateBehavior", this ); }

                // Xoay quanh trục Z
                this.transform.Rotate(0.0, 0.0, this.rotationSpeed * UnityEngine.Time.deltaTime);
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleRotatorBehavior.UpdateBehavior end.*/


        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleRotatorBehavior end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw", {
        inherits: [LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle],
        fields: {
            damage: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw#init", this ); }

                this.damage = 20.0;
            }
        },
        methods: {
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw.InitializeObstacleType start.*/
            InitializeObstacleType: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw#InitializeObstacleType", this ); }

                this.ObstacleType = LGSDK.TimelineUp.Obstacles.LGSDKObstacleType.Saw;
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw.InitializeObstacleType end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw#Initialize", this ); }

                this.health = 3.40282347E+38; // Lưỡi cưa không thể phá hủy
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw.Initialize end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw.HandleTriggerEnter start.*/
            HandleTriggerEnter: function (collider) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw#HandleTriggerEnter", this ); }

                // Bắn event khi va chạm, kèm theo sát thương
                this.TriggerEffect(new LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs.$ctor1(this.ObstacleType, LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType.Collision, this.gameObject, collider.gameObject, this.damage));
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw.HandleTriggerEnter end.*/


        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior", {
        inherits: [UnityEngine.MonoBehaviour,LGSDK.TimelineUp.Obstacles.ILGSDKObstacleBehavior],
        fields: {
            groove: null,
            speed: 0,
            waitTime: 0,
            patrolBehavior: null,
            pointA: null,
            pointB: null,
            sawRadius: 0
        },
        alias: ["UpdateBehavior", "LGSDK$TimelineUp$Obstacles$ILGSDKObstacleBehavior$UpdateBehavior"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior#init", this ); }

                this.speed = 2.0;
                this.waitTime = 1.0;
                this.sawRadius = 0.5;
            }
        },
        methods: {
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior#Start", this ); }

                // Tạo hai điểm A và B tự động dựa trên khe rãnh
                this.SetupPoints();

                // Thêm component LGSDKObstaclePatrolBehavior vào đối tượng này
                this.patrolBehavior = this.gameObject.AddComponent(LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior);
                this.patrolBehavior.SetPoints(this.pointA, this.pointB);
                // Gán tốc độ và thời gian chờ từ Inspector
                this.patrolBehavior.Speed = this.speed;
                this.patrolBehavior.WaitTime = this.waitTime;
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior.Start end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior.SetupPoints start.*/
            SetupPoints: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior#SetupPoints", this ); }

                if (UnityEngine.GameObject.op_Equality(this.groove, null)) {
                    UnityEngine.Debug.LogError$2("Groove kh\u00f4ng \u0111\u01b0\u1ee3c g\u00e1n! Vui l\u00f2ng g\u00e1n khe r\u00e3nh trong Inspector.");
                    return;
                }

                // Lấy chiều dài của khe rãnh dựa trên transform.localScale.x
                var grooveLength = this.groove.transform.localScale.x; // Sử dụng scale.x thay vì bounds.size.x

                // Lấy tọa độ X của groove
                var grooveX = this.groove.transform.position.x;

                // Lấy tọa độ Y và Z của saw
                var sawY = this.transform.position.y;
                var sawZ = this.transform.position.z;

                // Tạo hai điểm A và B ở hai đầu khe rãnh
                var pointAObject = new UnityEngine.GameObject.$ctor2("PointA");
                var pointBObject = new UnityEngine.GameObject.$ctor2("PointB");

                // Gắn PointA và PointB làm con của khe rãnh để dễ quản lý
                pointAObject.transform.SetParent(this.groove.transform);
                pointBObject.transform.SetParent(this.groove.transform);

                // Đặt vị trí của PointA và PointB
                // Sử dụng tọa độ Y và Z của saw
                pointAObject.transform.position = new pc.Vec3( grooveX + (-grooveLength / 2.0 + this.sawRadius), sawY, sawZ ); // Đầu trái + sawRadius
                pointBObject.transform.position = new pc.Vec3( grooveX + (grooveLength / 2.0 - this.sawRadius), sawY, sawZ ); // Đầu phải - sawRadius

                // Gán Transform cho pointA và pointB
                this.pointA = pointAObject.transform;
                this.pointB = pointBObject.transform;
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior.SetupPoints end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior.UpdateBehavior start.*/
            UpdateBehavior: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior#UpdateBehavior", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.patrolBehavior, null) || UnityEngine.Component.op_Equality(this.pointA, null) || UnityEngine.Component.op_Equality(this.pointB, null)) {
                    return;
                }

                // Tính toán giới hạn của groove dựa trên vị trí của pointA và pointB, bao gồm kích thước của saw
                var minX = UnityEngine.Mathf.Min(this.pointA.position.x, this.pointB.position.x) - this.sawRadius; // Giảm minX để tính cả kích thước của saw
                var maxX = UnityEngine.Mathf.Max(this.pointA.position.x, this.pointB.position.x) + this.sawRadius; // Tăng maxX để tính cả kích thước của saw

                // Gọi UpdatePatrol từ LGSDKObstaclePatrolBehavior để xử lý di chuyển
                this.patrolBehavior.UpdatePatrol();
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior.UpdateBehavior end.*/


        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel", {
        inherits: [LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle],
        fields: {
            goldReward: 0,
            numberTMPro: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel#init", this ); }

                this.goldReward = 1200;
            }
        },
        methods: {
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel.InitializeObstacleType start.*/
            InitializeObstacleType: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel#InitializeObstacleType", this ); }

                this.ObstacleType = LGSDK.TimelineUp.Obstacles.LGSDKObstacleType.SteelBarrel;
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel.InitializeObstacleType end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel#Initialize", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.numberTMPro, null)) {
                    UnityEngine.Debug.LogWarning$1("TextMeshPro component ch\u01b0a \u0111\u01b0\u1ee3c g\u00e1n cho SteelBarrel!", this.gameObject);
                }
                this.UpdateHealthDisplay();
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel.Initialize end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel.HandleDestroy start.*/
            HandleDestroy: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel#HandleDestroy", this ); }

                // Truyền goldReward dưới dạng float vào Value
                this.TriggerEffect(new LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs.ctor(this.ObstacleType, LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType.BarrelExploded, this.gameObject, this.goldReward));
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel.HandleDestroy end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel.TakeDamage start.*/
            TakeDamage: function (damage) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel#TakeDamage", this ); }

                LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.prototype.TakeDamage.call(this, damage);
                this.UpdateHealthDisplay();
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel.TakeDamage end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel.UpdateHealthDisplay start.*/
            UpdateHealthDisplay: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel#UpdateHealthDisplay", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.numberTMPro, null)) {
                    this.numberTMPro.text = System.Single.format(this.health, "F0"); // Hiển thị máu dạng số nguyên
                } else {
                    UnityEngine.Debug.LogWarning$1("Kh\u00f4ng th\u1ec3 c\u1eadp nh\u1eadt hi\u1ec3n th\u1ecb m\u00e1u: TextMeshPro component b\u1ecb thi\u1ebfu!", this.gameObject);
                }
                UnityEngine.Debug.Log$1(System.String.format("Steel Barrel Health: {0}", [Bridge.box(this.health, System.Single, System.Single.format, System.Single.getHashCode)]));
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel.UpdateHealthDisplay end.*/


        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade start.*/
    Bridge.define("LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade", {
        inherits: [LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle],
        fields: {
            healthBarCanvas: null,
            healthBarSlider: null,
            maxHealth: 0
        },
        methods: {
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade#Update", this ); }

                LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.prototype.Update.call(this);

                if (this.isDestroyed) {
                    return;
                }

                if (UnityEngine.GameObject.op_Inequality(this.healthBarCanvas, null) && UnityEngine.Component.op_Inequality(UnityEngine.Camera.main, null)) {
                    // Thanh máu luôn hướng về camera
                    this.healthBarCanvas.transform.rotation = new pc.Quat().lookRotation( UnityEngine.Camera.main.transform.forward, pc.Vec3.UP );
                }
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade.Update end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade.InitializeObstacleType start.*/
            InitializeObstacleType: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade#InitializeObstacleType", this ); }

                this.ObstacleType = LGSDK.TimelineUp.Obstacles.LGSDKObstacleType.WoodenBarricade;
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade.InitializeObstacleType end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade#Initialize", this ); }

                this.health = 50.0;
                this.maxHealth = this.health;
                this.SetupHealthBar();
                this.UpdateHealthBar();
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade.Initialize end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade.HandleDestroy start.*/
            HandleDestroy: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade#HandleDestroy", this ); }

                this.TriggerEffect(new LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs.ctor(this.ObstacleType, LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType.BarricadeDestroyed, this.gameObject));
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade.HandleDestroy end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade.TakeDamage start.*/
            TakeDamage: function (damage) {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade#TakeDamage", this ); }

                LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle.prototype.TakeDamage.call(this, damage);
                this.UpdateHealthBar();
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade.TakeDamage end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade.SetupHealthBar start.*/
            SetupHealthBar: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade#SetupHealthBar", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.healthBarSlider, null) || UnityEngine.GameObject.op_Equality(this.healthBarCanvas, null)) {
                    UnityEngine.Debug.LogWarning$1("Slider ho\u1eb7c Canvas ch\u01b0a \u0111\u01b0\u1ee3c g\u00e1n cho WoodenBarricade!", this.gameObject);
                    return;
                }

                this.healthBarSlider.maxValue = this.maxHealth;
                this.healthBarSlider.value = this.health;
                // Đặt vị trí thanh máu trên đầu object
                this.healthBarCanvas.transform.position = this.transform.position.$clone().add( new pc.Vec3( 0.0, 1.0, 0.0 ) );
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade.SetupHealthBar end.*/

            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade.UpdateHealthBar start.*/
            UpdateHealthBar: function () {
if ( TRACE ) { TRACE( "LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade#UpdateHealthBar", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.healthBarSlider, null)) {
                    this.healthBarSlider.value = this.health;
                } else {
                    UnityEngine.Debug.LogWarning$1("Kh\u00f4ng th\u1ec3 c\u1eadp nh\u1eadt thanh m\u00e1u: Slider component b\u1ecb thi\u1ebfu!", this.gameObject);
                }
                UnityEngine.Debug.Log$1(System.String.format("Wooden Barricade Health: {0}", [Bridge.box(this.health, System.Single, System.Single.format, System.Single.getHashCode)]));
            },
            /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade.UpdateHealthBar end.*/


        }
    });
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["LegoSDK.Follower","System","UnityEngine","UnityEngine.UI","System.Collections.Generic","System.Collections","LegoSDK.Prop","TMPro","LGSDK.TimelineUp.Obstacles","LegoTimelineUpMechanic.SumonerGate","LegoTimelineUpMechanic.Gate","LegoSDK.Bullet","LegoSDK.Leader","LegoSDK.FollowerInitialInfo","LegoSDK.TimelineUpMechanic"];

    /*LGSDKEnemyBullet start.*/
    $m("LGSDKEnemyBullet", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HandleFollowerHitEnemyBullet","t":8,"pi":[{"n":"data","pt":$n[0].FollowerEventData,"ps":0}],"sn":"HandleFollowerHitEnemyBullet","rt":$n[1].Void,"p":[$n[0].FollowerEventData]},{"a":2,"n":"Init","t":8,"pi":[{"n":"spawnPos","pt":$n[2].Vector3,"ps":0},{"n":"maxDist","pt":$n[1].Single,"ps":1}],"sn":"Init","rt":$n[1].Void,"p":[$n[2].Vector3,$n[1].Single]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[2].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"maxDistance","t":4,"rt":$n[1].Single,"sn":"maxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rb","t":4,"rt":$n[2].Rigidbody,"sn":"rb"},{"a":2,"n":"speed","t":4,"rt":$n[1].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"startPos","t":4,"rt":$n[2].Vector3,"sn":"startPos"}]}; }, $n);
    /*LGSDKEnemyBullet end.*/

    /*LGSDKEnemyConfig start.*/
    $m("LGSDKEnemyConfig", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"bulletPrefab","t":4,"rt":$n[2].GameObject,"sn":"bulletPrefab"},{"a":2,"n":"enemyPrefab","t":4,"rt":$n[2].GameObject,"sn":"enemyPrefab"},{"a":2,"n":"level","t":4,"rt":$n[1].Int32,"sn":"level","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"quantity","t":4,"rt":$n[1].Int32,"sn":"quantity","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*LGSDKEnemyConfig end.*/

    /*LGSDKEnemyController start.*/
    $m("LGSDKEnemyController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Die","t":8,"sn":"Die","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"amount","pt":$n[1].Single,"ps":0}],"sn":"TakeDamage","rt":$n[1].Void,"p":[$n[1].Single]},{"a":1,"n":"UpdateHealthUI","t":8,"sn":"UpdateHealthUI","rt":$n[1].Void},{"a":1,"n":"currentHealth","t":4,"rt":$n[1].Single,"sn":"currentHealth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"healthBarImage","t":4,"rt":$n[3].Image,"sn":"healthBarImage"},{"a":2,"n":"maxHealth","t":4,"rt":$n[1].Single,"sn":"maxHealth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LGSDKEnemyController end.*/

    /*LGSDKEnemyShooter start.*/
    $m("LGSDKEnemyShooter", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Shoot","t":8,"sn":"Shoot","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"bulletPrefab","t":4,"rt":$n[2].GameObject,"sn":"bulletPrefab"},{"a":2,"n":"bulletSpeed","t":4,"rt":$n[1].Single,"sn":"bulletSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"fireCooldown","t":4,"rt":$n[1].Single,"sn":"fireCooldown","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"firePoint","t":4,"rt":$n[2].Transform,"sn":"firePoint"},{"a":2,"n":"fireRate","t":4,"rt":$n[1].Single,"sn":"fireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"maxDistance","t":4,"rt":$n[1].Single,"sn":"maxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LGSDKEnemyShooter end.*/

    /*LGSDKEnemySpawner start.*/
    $m("LGSDKEnemySpawner", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"SpawnAllEnemies","t":8,"sn":"SpawnAllEnemies","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"enemiesPerRow","t":4,"rt":$n[1].Int32,"sn":"enemiesPerRow","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Danh s\u00e1ch c\u00e1c lo\u1ea1i enemy \u0111\u1ec3 spawn")],"a":2,"n":"enemyConfigs","t":4,"rt":$n[4].List$1(LGSDKEnemyConfig),"sn":"enemyConfigs"},{"a":2,"n":"spacingX","t":4,"rt":$n[1].Single,"sn":"spacingX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("C\u1ea5u h\u00ecnh v\u1ecb tr\u00ed spawn")],"a":2,"n":"startX","t":4,"rt":$n[1].Single,"sn":"startX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"startZ","t":4,"rt":$n[1].Single,"sn":"startZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LGSDKEnemySpawner end.*/

    /*LGSDKHealthBarFollow start.*/
    $m("LGSDKHealthBarFollow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"mainCamera","t":4,"rt":$n[2].Camera,"sn":"mainCamera"}]}; }, $n);
    /*LGSDKHealthBarFollow end.*/

    /*LGSDKFlowerCharacterController start.*/
    $m("LGSDKFlowerCharacterController", function () { return {"nested":[Function],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"leader","pt":$n[2].Transform,"ps":0},{"n":"offset","pt":$n[2].Vector3,"ps":1}],"sn":"Initialize","rt":$n[1].Void,"p":[$n[2].Transform,$n[2].Vector3]},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[2].Collider]},{"a":1,"n":"Shoot","t":8,"sn":"Shoot","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"start","t":8,"sn":"start","rt":$n[1].Void},{"a":2,"n":"Damage","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_Damage","t":8,"rt":$n[1].Single,"fg":"Damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_Damage","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"Damage"},"fn":"Damage"},{"a":2,"n":"FireRate","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_FireRate","t":8,"rt":$n[1].Single,"fg":"FireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_FireRate","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"FireRate"},"fn":"FireRate"},{"a":2,"n":"Level","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_Level","t":8,"rt":$n[1].Int32,"fg":"Level","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Level","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"Level"},"fn":"Level"},{"a":2,"n":"MaxDistance","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_MaxDistance","t":8,"rt":$n[1].Single,"fg":"MaxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MaxDistance","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"MaxDistance"},"fn":"MaxDistance"},{"a":2,"n":"bulletPrefab","t":4,"rt":$n[2].GameObject,"sn":"bulletPrefab"},{"a":2,"n":"bulletPrefabsByLevel","t":4,"rt":$n[4].List$1(UnityEngine.GameObject),"sn":"bulletPrefabsByLevel"},{"a":2,"n":"bulletSpawnPoint","t":4,"rt":$n[2].Transform,"sn":"bulletSpawnPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[1].Single,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"fireCooldown","t":4,"rt":$n[1].Single,"sn":"fireCooldown","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fireRate","t":4,"rt":$n[1].Single,"sn":"fireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"leaderTransform","t":4,"rt":$n[2].Transform,"sn":"leaderTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"level","t":4,"rt":$n[1].Int32,"sn":"level","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxDistance","t":4,"rt":$n[1].Single,"sn":"maxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"moveSpeed","t":4,"rt":$n[1].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"offsetFromLeader","t":4,"rt":$n[2].Vector3,"sn":"offsetFromLeader"},{"a":1,"n":"rend","t":4,"rt":$n[2].Renderer,"sn":"rend"},{"a":2,"n":"OnFollowerTriggerEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnFollowerTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnFollowerTriggerEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnFollowerTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnFollowerTriggerEnter","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*LGSDKFlowerCharacterController end.*/

    /*LGSDKBullet start.*/
    $m("LGSDKBullet", function () { return {"nested":[Function],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[2].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"Damage","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_Damage","t":8,"rt":$n[1].Single,"fg":"Damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_Damage","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"Damage"},"fn":"Damage"},{"a":2,"n":"FireRate","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_FireRate","t":8,"rt":$n[1].Single,"fg":"FireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_FireRate","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"FireRate"},"fn":"FireRate"},{"a":2,"n":"MaxDistance","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_MaxDistance","t":8,"rt":$n[1].Single,"fg":"MaxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MaxDistance","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"MaxDistance"},"fn":"MaxDistance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[1].Single,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fireRate","t":4,"rt":$n[1].Single,"sn":"fireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxDistance","t":4,"rt":$n[1].Single,"sn":"maxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[1].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"startPosition","t":4,"rt":$n[2].Vector3,"sn":"startPosition"},{"a":2,"n":"OnBulletTriggerEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnBulletTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnBulletTriggerEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnBulletTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnBulletTriggerEnter","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*LGSDKBullet end.*/

    /*LGSDKCameraFollow start.*/
    $m("LGSDKCameraFollow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[1].Void},{"a":2,"n":"leaderCharacter","t":4,"rt":$n[2].Transform,"sn":"leaderCharacter"},{"at":[new UnityEngine.HeaderAttribute("Offset (X=0, Y=5, Z=-15)")],"a":2,"n":"offset","t":4,"rt":$n[2].Vector3,"sn":"offset"},{"a":2,"n":"smoothSpeed","t":4,"rt":$n[1].Single,"sn":"smoothSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LGSDKCameraFollow end.*/

    /*LGSDKKnockbackManager start.*/
    $m("LGSDKKnockbackManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"KnockbackCoroutine","is":true,"t":8,"pi":[{"n":"obj","pt":$n[2].Transform,"ps":0}],"sn":"KnockbackCoroutine","rt":$n[5].IEnumerator,"p":[$n[2].Transform]},{"a":2,"n":"Register","is":true,"t":8,"pi":[{"n":"obj","pt":$n[2].Transform,"ps":0}],"sn":"Register","rt":$n[1].Void,"p":[$n[2].Transform]},{"a":2,"n":"TriggerKnockback","is":true,"t":8,"sn":"TriggerKnockback","rt":$n[1].Void},{"a":2,"n":"affectedObjects","is":true,"t":4,"rt":$n[4].List$1(UnityEngine.Transform),"sn":"affectedObjects"},{"a":2,"n":"knockbackDistance","is":true,"t":4,"rt":$n[1].Single,"sn":"knockbackDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"knockbackDuration","is":true,"t":4,"rt":$n[1].Single,"sn":"knockbackDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LGSDKKnockbackManager end.*/

    /*LGSDKLeaderCharacterController start.*/
    $m("LGSDKLeaderCharacterController", function () { return {"nested":[Function],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddNewFollower","t":8,"sn":"AddNewFollower","rt":$n[1].Void},{"a":2,"n":"GetFollowerCount","t":8,"sn":"GetFollowerCount","rt":$n[1].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"HandleSwipeMovement","t":8,"sn":"HandleSwipeMovement","rt":$n[1].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[2].Collider]},{"a":2,"n":"RemoveLastFollower","t":8,"sn":"RemoveLastFollower","rt":$n[1].Void},{"a":1,"n":"Shoot","t":8,"sn":"Shoot","rt":$n[1].Void},{"a":2,"n":"SpawnCustomFollowers","t":8,"pi":[{"n":"level","pt":$n[1].Int32,"ps":0},{"n":"damage","pt":$n[1].Single,"ps":1},{"n":"maxDistance","pt":$n[1].Single,"ps":2},{"n":"fireRate","pt":$n[1].Single,"ps":3},{"n":"bulletPrefab","pt":$n[2].GameObject,"ps":4}],"sn":"SpawnCustomFollowers","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Single,$n[1].Single,$n[1].Single,$n[2].GameObject]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"UpgradeLevel","t":8,"sn":"UpgradeLevel","rt":$n[1].Void},{"a":2,"n":"Damage","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_Damage","t":8,"rt":$n[1].Single,"fg":"Damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_Damage","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"Damage"},"fn":"Damage"},{"a":2,"n":"FireRate","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_FireRate","t":8,"rt":$n[1].Single,"fg":"FireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_FireRate","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"FireRate"},"fn":"FireRate"},{"a":2,"n":"Level","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_Level","t":8,"rt":$n[1].Int32,"fg":"Level","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Level","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"Level"},"fn":"Level"},{"a":2,"n":"MaxDistance","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_MaxDistance","t":8,"rt":$n[1].Single,"fg":"MaxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MaxDistance","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"MaxDistance"},"fn":"MaxDistance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"LEVEL_UP_DAMAGE","t":4,"rt":$n[1].Single,"sn":"LEVEL_UP_DAMAGE","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"LEVEL_UP_FIRE_RATE","t":4,"rt":$n[1].Single,"sn":"LEVEL_UP_FIRE_RATE","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"LEVEL_UP_MAX_DISTANCE","t":4,"rt":$n[1].Single,"sn":"LEVEL_UP_MAX_DISTANCE","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"bulletPrefabsByLevel","t":4,"rt":$n[2].GameObject,"sn":"bulletPrefabsByLevel"},{"a":2,"n":"bulletPrefabsByLevelList","t":4,"rt":$n[4].List$1(UnityEngine.GameObject),"sn":"bulletPrefabsByLevelList"},{"at":[new UnityEngine.HeaderAttribute("Bullet variables")],"a":2,"n":"bulletSpawnPoint","t":4,"rt":$n[2].Transform,"sn":"bulletSpawnPoint"},{"at":[new UnityEngine.HeaderAttribute("Follower Setup")],"a":2,"n":"columns","t":4,"rt":$n[1].Int32,"sn":"columns","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentSideOffset","t":4,"rt":$n[1].Single,"sn":"currentSideOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[1].Single,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"fireCooldown","t":4,"rt":$n[1].Single,"sn":"fireCooldown","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fireRate","t":4,"rt":$n[1].Single,"sn":"fireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"flowerCharacterPrefab","t":4,"rt":$n[2].GameObject,"sn":"flowerCharacterPrefab"},{"a":2,"n":"followerRadius","t":4,"rt":$n[1].Single,"sn":"followerRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"followers","t":4,"rt":$n[4].List$1(UnityEngine.GameObject),"sn":"followers"},{"a":2,"n":"followersPerRing","t":4,"rt":$n[1].Int32,"sn":"followersPerRing","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Initial Followers")],"a":2,"n":"initialFollowers","t":4,"rt":$n[4].List$1(LegoSDK.FollowerInitialInfo.LGSDKFollowerInitialInfo),"sn":"initialFollowers"},{"a":1,"n":"isSwiping","t":4,"rt":$n[1].Boolean,"sn":"isSwiping","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Leader Stats"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"level","t":4,"rt":$n[1].Int32,"sn":"level","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxDistance","t":4,"rt":$n[1].Single,"sn":"maxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"maxSideOffset","t":4,"rt":$n[1].Single,"sn":"maxSideOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Leader Character variables")],"a":2,"n":"moveSpeed","t":4,"rt":$n[1].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rend","t":4,"rt":$n[2].Renderer,"sn":"rend"},{"a":2,"n":"ringSpacing","t":4,"rt":$n[1].Single,"sn":"ringSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"sideSpeed","t":4,"rt":$n[1].Single,"sn":"sideSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spacingX","t":4,"rt":$n[1].Single,"sn":"spacingX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spacingZ","t":4,"rt":$n[1].Single,"sn":"spacingZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"touchStartPos","t":4,"rt":$n[2].Vector2,"sn":"touchStartPos"},{"a":2,"n":"OnLeaderTriggerEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnLeaderTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnLeaderTriggerEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnLeaderTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnLeaderTriggerEnter","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*LGSDKLeaderCharacterController end.*/

    /*CoinCollector start.*/
    $m("CoinCollector", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddCoin","t":8,"pi":[{"n":"amount","pt":$n[1].Int32,"ps":0}],"sn":"AddCoin","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":1,"n":"HandleCoinCollected","t":8,"pi":[{"n":"data","pt":$n[6].LGSDKCoinEventData,"ps":0}],"sn":"HandleCoinCollected","rt":$n[1].Void,"p":[$n[6].LGSDKCoinEventData]},{"a":2,"n":"MoveCoinToUI","t":8,"pi":[{"n":"coin","pt":$n[2].GameObject,"ps":0}],"sn":"MoveCoinToUI","rt":$n[5].IEnumerator,"p":[$n[2].GameObject]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"flySpeed","t":4,"rt":$n[1].Single,"sn":"flySpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"totalCoins","t":4,"rt":$n[1].Int32,"sn":"totalCoins","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"uiTarget","t":4,"rt":$n[2].Transform,"sn":"uiTarget"}]}; }, $n);
    /*CoinCollector end.*/

    /*LGSDKDamagePopup start.*/
    $m("LGSDKDamagePopup", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[1].Void},{"a":2,"n":"SetDamage","t":8,"pi":[{"n":"damage","pt":$n[1].Int32,"ps":0}],"sn":"SetDamage","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"floatSpeed","t":4,"rt":$n[1].Single,"sn":"floatSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"lifetime","t":4,"rt":$n[1].Single,"sn":"lifetime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"text","t":4,"rt":$n[7].TextMeshProUGUI,"sn":"text"}]}; }, $n);
    /*LGSDKDamagePopup end.*/

    /*LGSDKLoot start.*/
    $m("LGSDKLoot", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BreakBrick","t":8,"pi":[{"n":"brick","pt":$n[2].GameObject,"ps":0}],"sn":"BreakBrick","rt":$n[1].Void,"p":[$n[2].GameObject]},{"a":2,"n":"BreakNextBrick","t":8,"sn":"BreakNextBrick","rt":$n[1].Void},{"a":1,"n":"CountAllBricks","t":8,"sn":"CountAllBricks","rt":$n[1].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"HandleBulletCollision","t":8,"pi":[{"n":"bullet","pt":$n[2].GameObject,"ps":0},{"n":"hitPoint","pt":$n[2].Transform,"ps":1}],"sn":"HandleBulletCollision","rt":$n[1].Void,"p":[$n[2].GameObject,$n[2].Transform]},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[2].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"brokenBricks","t":4,"rt":$n[1].Int32,"sn":"brokenBricks","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentBrickIndex","t":4,"rt":$n[1].Int32,"sn":"currentBrickIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentLayerIndex","t":4,"rt":$n[1].Int32,"sn":"currentLayerIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"currentXP","t":4,"rt":$n[1].Int32,"sn":"currentXP","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"damagePopupPrefab","t":4,"rt":$n[2].GameObject,"sn":"damagePopupPrefab"},{"a":2,"n":"hitPoint","t":4,"rt":$n[2].Transform,"sn":"hitPoint"},{"a":2,"n":"layers","t":4,"rt":$n[4].List$1(UnityEngine.Transform),"sn":"layers"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timeBrickBreak","t":4,"rt":$n[1].Single,"sn":"timeBrickBreak","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"totalBricks","t":4,"rt":$n[1].Int32,"sn":"totalBricks","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"totalExperience","t":4,"rt":$n[1].Int32,"sn":"totalExperience","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*LGSDKLoot end.*/

    /*LootCollector start.*/
    $m("LootCollector", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddExperience","t":8,"pi":[{"n":"data","pt":$n[6].LGSDKLootEventData,"ps":0}],"sn":"AddExperience","rt":$n[1].Void,"p":[$n[6].LGSDKLootEventData]},{"a":1,"n":"BreakBrick","t":8,"pi":[{"n":"brick","pt":$n[2].GameObject,"ps":0}],"sn":"BreakBrick","rt":$n[1].Void,"p":[$n[2].GameObject]},{"a":2,"n":"BreakNextBrick","t":8,"pi":[{"n":"data","pt":$n[6].LGSDKLootEventData,"ps":0}],"sn":"BreakNextBrick","rt":$n[1].Void,"p":[$n[6].LGSDKLootEventData]},{"a":1,"n":"HandleLootBulletTrigger","t":8,"pi":[{"n":"data","pt":$n[6].LGSDKLootEventData,"ps":0}],"sn":"HandleLootBulletTrigger","rt":$n[1].Void,"p":[$n[6].LGSDKLootEventData]},{"a":1,"n":"HandleLootCharactorTrigger","t":8,"pi":[{"n":"data","pt":$n[6].LGSDKLootEventData,"ps":0}],"sn":"HandleLootCharactorTrigger","rt":$n[1].Void,"p":[$n[6].LGSDKLootEventData]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"currentBrickIndex","t":4,"rt":$n[1].Int32,"sn":"currentBrickIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentLayerIndex","t":4,"rt":$n[1].Int32,"sn":"currentLayerIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"currentXP","t":4,"rt":$n[1].Int32,"sn":"currentXP","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"maxXP","t":4,"rt":$n[1].Int32,"sn":"maxXP","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"totalExperience","t":4,"rt":$n[1].Int32,"sn":"totalExperience","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*LootCollector end.*/

    /*TowerBrickController start.*/
    $m("TowerBrickController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BreakBrick","t":8,"pi":[{"n":"brick","pt":$n[2].GameObject,"ps":0}],"sn":"BreakBrick","rt":$n[1].Void,"p":[$n[2].GameObject]},{"a":2,"n":"BreakNextBrick","t":8,"sn":"BreakNextBrick","rt":$n[1].Void},{"a":1,"n":"currentBrickIndex","t":4,"rt":$n[1].Int32,"sn":"currentBrickIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentLayerIndex","t":4,"rt":$n[1].Int32,"sn":"currentLayerIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"layers","t":4,"rt":$n[4].List$1(UnityEngine.Transform),"sn":"layers"}]}; }, $n);
    /*TowerBrickController end.*/

    /*TowerDamageHandler start.*/
    $m("TowerDamageHandler", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"TakeDamage","t":8,"sn":"TakeDamage","rt":$n[1].Void},{"a":2,"n":"amount","t":4,"rt":$n[1].Int32,"sn":"amount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentHealth","t":4,"rt":$n[1].Int32,"sn":"currentHealth","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"maxHealth","t":4,"rt":$n[1].Int32,"sn":"maxHealth","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"totalDamage","t":4,"rt":$n[1].Int32,"sn":"totalDamage","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*TowerDamageHandler end.*/

    /*TowerTestController start.*/
    $m("TowerTestController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[2].Collider]},{"a":1,"n":"SimulateKnifeHit","t":8,"sn":"SimulateKnifeHit","rt":$n[1].Void},{"a":2,"n":"TowerBrick","t":4,"rt":TowerBrickController,"sn":"TowerBrick"},{"a":2,"n":"damagePopupPrefab","t":4,"rt":$n[2].GameObject,"sn":"damagePopupPrefab"},{"a":2,"n":"hitPoint","t":4,"rt":$n[2].Transform,"sn":"hitPoint"},{"a":2,"n":"tower","t":4,"rt":TowerDamageHandler,"sn":"tower"}]}; }, $n);
    /*TowerTestController end.*/

    /*WarriorPrisonCollector start.*/
    $m("WarriorPrisonCollector", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetWaypointsForWarrior","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0},{"n":"data","pt":$n[6].LGSDKWarriorPrisonEventData,"ps":1}],"sn":"GetWaypointsForWarrior","rt":System.Array.type(UnityEngine.Vector3),"p":[$n[1].Int32,$n[6].LGSDKWarriorPrisonEventData]},{"a":1,"n":"HandleWarriorPrisonBulletTrigger","t":8,"pi":[{"n":"data","pt":$n[6].LGSDKWarriorPrisonEventData,"ps":0}],"sn":"HandleWarriorPrisonBulletTrigger","rt":$n[1].Void,"p":[$n[6].LGSDKWarriorPrisonEventData]},{"a":1,"n":"HandleWarriorPrisonCharactorTrigger","t":8,"pi":[{"n":"data","pt":$n[6].LGSDKWarriorPrisonEventData,"ps":0}],"sn":"HandleWarriorPrisonCharactorTrigger","rt":$n[1].Void,"p":[$n[6].LGSDKWarriorPrisonEventData]},{"a":2,"n":"LevelUp","t":8,"pi":[{"n":"data","pt":$n[6].LGSDKWarriorPrisonEventData,"ps":0}],"sn":"LevelUp","rt":$n[1].Void,"p":[$n[6].LGSDKWarriorPrisonEventData]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"ReleaseWarriors","t":8,"pi":[{"n":"data","pt":$n[6].LGSDKWarriorPrisonEventData,"ps":0}],"sn":"ReleaseWarriors","rt":$n[1].Void,"p":[$n[6].LGSDKWarriorPrisonEventData]},{"a":1,"n":"UpdateLevelBar","t":8,"sn":"UpdateLevelBar","rt":$n[1].Void},{"a":1,"n":"currentExp","t":4,"rt":$n[1].Int32,"sn":"currentExp","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentLevel","t":4,"rt":$n[1].Int32,"sn":"currentLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"expToLevelUp","t":4,"rt":$n[1].Int32,"sn":"expToLevelUp","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"level","t":4,"rt":$n[1].Int32,"sn":"level","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"levelBar","t":4,"rt":$n[3].Slider,"sn":"levelBar"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"levelText","t":4,"rt":$n[7].TMP_Text,"sn":"levelText"},{"a":2,"n":"releasePositions","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"releasePositions"},{"a":2,"n":"warriors","t":4,"rt":$n[4].List$1(LegoSDK.Prop.LGSDKWarrior),"sn":"warriors"}]}; }, $n);
    /*WarriorPrisonCollector end.*/

    /*LGSDKWarriorPrison start.*/
    $m("LGSDKWarriorPrison", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"HandleBulletCollision","t":8,"pi":[{"n":"bullet","pt":$n[2].GameObject,"ps":0}],"sn":"HandleBulletCollision","rt":$n[1].Void,"p":[$n[2].GameObject]},{"a":2,"n":"HandleLeaderCharacterCollision","t":8,"pi":[{"n":"leaderCharacter","pt":$n[2].GameObject,"ps":0}],"sn":"HandleLeaderCharacterCollision","rt":$n[1].Void,"p":[$n[2].GameObject]},{"a":2,"n":"LevelUp","t":8,"sn":"LevelUp","rt":$n[1].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[2].Collider]},{"a":1,"n":"UpdateLevelBar","t":8,"sn":"UpdateLevelBar","rt":$n[1].Void},{"a":2,"n":"currentExp","t":4,"rt":$n[1].Int32,"sn":"currentExp","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"currentLevel","t":4,"rt":$n[1].Int32,"sn":"currentLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"expToLevelUp","t":4,"rt":$n[1].Int32,"sn":"expToLevelUp","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"levelBar","t":4,"rt":$n[3].Slider,"sn":"levelBar"},{"a":2,"n":"levelText","t":4,"rt":$n[7].TextMeshProUGUI,"sn":"levelText"},{"a":2,"n":"warriors","t":4,"rt":$n[4].List$1(LegoSDK.Prop.LGSDKWarrior),"sn":"warriors"}]}; }, $n);
    /*LGSDKWarriorPrison end.*/

    /*BoxHealth start.*/
    $m("BoxHealth", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[2].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[1].Void,"p":[$n[2].Collision]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"amount","pt":$n[1].Int32,"ps":0}],"sn":"TakeDamage","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":1,"n":"UpdateText","t":8,"sn":"UpdateText","rt":$n[1].Void},{"a":2,"n":"health","t":4,"rt":$n[1].Int32,"sn":"health","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"textMesh","t":4,"rt":$n[7].TextMeshPro,"sn":"textMesh"}]}; }, $n);
    /*BoxHealth end.*/

    /*TMPForceLoader start.*/
    $m("TMPForceLoader", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.RuntimeInitializeOnLoadMethodAttribute.$ctor1(1)],"a":1,"n":"LoadTMPSettings","is":true,"t":8,"sn":"LoadTMPSettings","rt":$n[1].Void}]}; }, $n);
    /*TMPForceLoader end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SetDamage","t":8,"pi":[{"n":"damageValue","pt":$n[1].Single,"ps":0}],"sn":"SetDamage","rt":$n[1].Void,"p":[$n[1].Single]},{"a":2,"n":"TakeCollision","t":8,"sn":"TakeCollision","rt":$n[1].Void},{"a":2,"n":"damage","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_damage","t":8,"rt":$n[1].Single,"fg":"damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_damage","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"damage"},"fn":"damage"},{"a":1,"backing":true,"n":"<damage>k__BackingField","t":4,"rt":$n[1].Single,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesBulletExample end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HandleObstacleEffect","t":8,"pi":[{"n":"effectArgs","pt":$n[8].LGSDKObstacleEffectEventArgs,"ps":0}],"sn":"HandleObstacleEffect","rt":$n[1].Void,"p":[$n[8].LGSDKObstacleEffectEventArgs]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gold","t":4,"rt":$n[1].Int32,"sn":"gold","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"player","t":4,"rt":$n[8].LGSDKObstaclesPlayerExample,"sn":"player"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playerHealth","t":4,"rt":$n[1].Single,"sn":"playerHealth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesExample end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Shoot","t":8,"sn":"Shoot","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bulletDamage","t":4,"rt":$n[1].Single,"sn":"bulletDamage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bulletPrefab","t":4,"rt":$n[2].GameObject,"sn":"bulletPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bulletSpeed","t":4,"rt":$n[1].Single,"sn":"bulletSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"firePoint","t":4,"rt":$n[2].Transform,"sn":"firePoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fireRate","t":4,"rt":$n[1].Single,"sn":"fireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveSpeed","t":4,"rt":$n[1].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"nextFireTime","t":4,"rt":$n[1].Single,"sn":"nextFireTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclesPlayerExample end.*/

    /*LGSDK.TimelineUp.Obstacles.ILGSDKObstacleBehavior start.*/
    $m("LGSDK.TimelineUp.Obstacles.ILGSDKObstacleBehavior", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"UpdateBehavior","t":8,"sn":"LGSDK$TimelineUp$Obstacles$ILGSDKObstacleBehavior$UpdateBehavior","rt":$n[1].Void}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.ILGSDKObstacleBehavior end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"v":true,"a":3,"n":"HandleDestroy","t":8,"sn":"HandleDestroy","rt":$n[1].Void},{"v":true,"a":3,"n":"HandleTriggerEnter","t":8,"pi":[{"n":"collider","pt":$n[2].Collider,"ps":0}],"sn":"HandleTriggerEnter","rt":$n[1].Void,"p":[$n[2].Collider]},{"v":true,"a":3,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[1].Void},{"v":true,"a":3,"n":"InitializeObstacleType","t":8,"sn":"InitializeObstacleType","rt":$n[1].Void},{"a":2,"n":"IsDestroyed","t":8,"sn":"IsDestroyed","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnDestroyObstacle","t":8,"sn":"OnDestroyObstacle","rt":$n[1].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[2].Collider]},{"v":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"v":true,"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"damage","pt":$n[1].Single,"ps":0}],"sn":"TakeDamage","rt":$n[1].Void,"p":[$n[1].Single]},{"a":3,"n":"TriggerEffect","t":8,"pi":[{"n":"effectArgs","pt":$n[8].LGSDKObstacleEffectEventArgs,"ps":0}],"sn":"TriggerEffect","rt":$n[1].Void,"p":[$n[8].LGSDKObstacleEffectEventArgs]},{"v":true,"a":3,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"ObstacleType","t":16,"rt":$n[8].LGSDKObstacleType,"g":{"a":2,"n":"get_ObstacleType","t":8,"rt":$n[8].LGSDKObstacleType,"fg":"ObstacleType","box":function ($v) { return Bridge.box($v, LGSDK.TimelineUp.Obstacles.LGSDKObstacleType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleType));}},"s":{"a":3,"n":"set_ObstacleType","t":8,"p":[$n[8].LGSDKObstacleType],"rt":$n[1].Void,"fs":"ObstacleType"},"fn":"ObstacleType"},{"a":3,"n":"behaviorsArray","t":4,"rt":System.Array.type(LGSDK.TimelineUp.Obstacles.ILGSDKObstacleBehavior),"sn":"behaviorsArray"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"health","t":4,"rt":$n[1].Single,"sn":"health","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":3,"n":"isDestroyed","t":4,"rt":$n[1].Boolean,"sn":"isDestroyed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnEffectTriggered","is":true,"t":2,"ad":{"a":2,"n":"add_OnEffectTriggered","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnEffectTriggered","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnEffectTriggered","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnEffectTriggered","rt":$n[1].Void,"p":[Function]}},{"a":1,"backing":true,"n":"<ObstacleType>k__BackingField","t":4,"rt":$n[8].LGSDKObstacleType,"sn":"ObstacleType","box":function ($v) { return Bridge.box($v, LGSDK.TimelineUp.Obstacles.LGSDKObstacleType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleType));}}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKBaseObstacle end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleIdleBehavior start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKObstacleIdleBehavior", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"UpdateBehavior","t":8,"sn":"UpdateBehavior","rt":$n[1].Void}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleIdleBehavior end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetPointA","t":8,"sn":"GetPointA","rt":$n[2].Transform},{"a":2,"n":"GetPointB","t":8,"sn":"GetPointB","rt":$n[2].Transform},{"a":2,"n":"SetPoints","t":8,"pi":[{"n":"newPointA","pt":$n[2].Transform,"ps":0},{"n":"newPointB","pt":$n[2].Transform,"ps":1}],"sn":"SetPoints","rt":$n[1].Void,"p":[$n[2].Transform,$n[2].Transform]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"UpdatePatrol","t":8,"sn":"UpdatePatrol","rt":$n[1].Void},{"a":2,"n":"Speed","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_Speed","t":8,"rt":$n[1].Single,"fg":"Speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_Speed","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"Speed"},"fn":"Speed"},{"a":2,"n":"WaitTime","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_WaitTime","t":8,"rt":$n[1].Single,"fg":"WaitTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_WaitTime","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"WaitTime"},"fn":"WaitTime"},{"a":1,"n":"isWaiting","t":4,"rt":$n[1].Boolean,"sn":"isWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pointA","t":4,"rt":$n[2].Transform,"sn":"pointA"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pointB","t":4,"rt":$n[2].Transform,"sn":"pointB"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[1].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"targetPoint","t":4,"rt":$n[2].Transform,"sn":"targetPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"waitTime","t":4,"rt":$n[1].Single,"sn":"waitTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"waitTimer","t":4,"rt":$n[1].Single,"sn":"waitTimer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstaclePatrolBehavior end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleRotatorBehavior start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKObstacleRotatorBehavior", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"UpdateBehavior","t":8,"sn":"UpdateBehavior","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotationSpeed","t":4,"rt":$n[1].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleRotatorBehavior end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"SetupPoints","t":8,"sn":"SetupPoints","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"UpdateBehavior","t":8,"sn":"UpdateBehavior","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"groove","t":4,"rt":$n[2].GameObject,"sn":"groove"},{"a":1,"n":"patrolBehavior","t":4,"rt":$n[8].LGSDKObstaclePatrolBehavior,"sn":"patrolBehavior"},{"a":1,"n":"pointA","t":4,"rt":$n[2].Transform,"sn":"pointA"},{"a":1,"n":"pointB","t":4,"rt":$n[2].Transform,"sn":"pointB"},{"a":1,"n":"sawRadius","t":4,"rt":$n[1].Single,"sn":"sawRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speed","t":4,"rt":$n[1].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"waitTime","t":4,"rt":$n[1].Single,"sn":"waitTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager", function () { return {"nested":[Function],"att":385,"a":2,"s":true,"m":[{"n":".cctor","t":1,"sn":"ctor","sm":true},{"a":2,"n":"ClearSubscribers","is":true,"t":8,"sn":"ClearSubscribers","rt":$n[1].Void},{"a":1,"n":"HandleObstacleEffect","is":true,"t":8,"pi":[{"n":"sender","pt":$n[1].Object,"ps":0},{"n":"effectArgs","pt":$n[8].LGSDKObstacleEffectEventArgs,"ps":1}],"sn":"HandleObstacleEffect","rt":$n[1].Void,"p":[$n[1].Object,$n[8].LGSDKObstacleEffectEventArgs]},{"a":2,"n":"Unsubscribe","is":true,"t":8,"sn":"Unsubscribe","rt":$n[1].Void},{"a":2,"n":"OnObstacleEffect","is":true,"t":2,"ad":{"a":2,"n":"add_OnObstacleEffect","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnObstacleEffect","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnObstacleEffect","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnObstacleEffect","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackManager end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[8].LGSDKObstacleType,$n[8].LGSDKObstacleCallbackType,$n[2].GameObject,$n[1].Single],"pi":[{"n":"type","pt":$n[8].LGSDKObstacleType,"ps":0},{"n":"callbackType","pt":$n[8].LGSDKObstacleCallbackType,"ps":1},{"n":"obstacle","pt":$n[2].GameObject,"ps":2},{"n":"value","dv":0.0,"o":true,"pt":$n[1].Single,"ps":3}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[8].LGSDKObstacleType,$n[8].LGSDKObstacleCallbackType,$n[2].GameObject,$n[2].GameObject,$n[1].Single],"pi":[{"n":"type","pt":$n[8].LGSDKObstacleType,"ps":0},{"n":"callbackType","pt":$n[8].LGSDKObstacleCallbackType,"ps":1},{"n":"obstacle","pt":$n[2].GameObject,"ps":2},{"n":"collider","pt":$n[2].GameObject,"ps":3},{"n":"value","dv":0.0,"o":true,"pt":$n[1].Single,"ps":4}],"sn":"$ctor1"},{"a":2,"n":"CallbackType","t":16,"rt":$n[8].LGSDKObstacleCallbackType,"g":{"a":2,"n":"get_CallbackType","t":8,"rt":$n[8].LGSDKObstacleCallbackType,"fg":"CallbackType","box":function ($v) { return Bridge.box($v, LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType));}},"s":{"a":1,"n":"set_CallbackType","t":8,"p":[$n[8].LGSDKObstacleCallbackType],"rt":$n[1].Void,"fs":"CallbackType"},"fn":"CallbackType"},{"a":2,"n":"ColliderObject","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_ColliderObject","t":8,"rt":$n[2].GameObject,"fg":"ColliderObject"},"s":{"a":1,"n":"set_ColliderObject","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"ColliderObject"},"fn":"ColliderObject"},{"a":2,"n":"ObstacleObject","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_ObstacleObject","t":8,"rt":$n[2].GameObject,"fg":"ObstacleObject"},"s":{"a":1,"n":"set_ObstacleObject","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"ObstacleObject"},"fn":"ObstacleObject"},{"a":2,"n":"ObstacleType","t":16,"rt":$n[8].LGSDKObstacleType,"g":{"a":2,"n":"get_ObstacleType","t":8,"rt":$n[8].LGSDKObstacleType,"fg":"ObstacleType","box":function ($v) { return Bridge.box($v, LGSDK.TimelineUp.Obstacles.LGSDKObstacleType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleType));}},"s":{"a":1,"n":"set_ObstacleType","t":8,"p":[$n[8].LGSDKObstacleType],"rt":$n[1].Void,"fs":"ObstacleType"},"fn":"ObstacleType"},{"a":2,"n":"Value","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_Value","t":8,"rt":$n[1].Single,"fg":"Value","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":1,"n":"set_Value","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"Value"},"fn":"Value"},{"a":1,"backing":true,"n":"<CallbackType>k__BackingField","t":4,"rt":$n[8].LGSDKObstacleCallbackType,"sn":"CallbackType","box":function ($v) { return Bridge.box($v, LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType));}},{"a":1,"backing":true,"n":"<ColliderObject>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"ColliderObject"},{"a":1,"backing":true,"n":"<ObstacleObject>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"ObstacleObject"},{"a":1,"backing":true,"n":"<ObstacleType>k__BackingField","t":4,"rt":$n[8].LGSDKObstacleType,"sn":"ObstacleType","box":function ($v) { return Bridge.box($v, LGSDK.TimelineUp.Obstacles.LGSDKObstacleType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleType));}},{"a":1,"backing":true,"n":"<Value>k__BackingField","t":4,"rt":$n[1].Single,"sn":"Value","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleEffectEventArgs end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleType start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKObstacleType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Lock","is":true,"t":4,"rt":$n[8].LGSDKObstacleType,"sn":"Lock","box":function ($v) { return Bridge.box($v, LGSDK.TimelineUp.Obstacles.LGSDKObstacleType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleType));}},{"a":2,"n":"Saw","is":true,"t":4,"rt":$n[8].LGSDKObstacleType,"sn":"Saw","box":function ($v) { return Bridge.box($v, LGSDK.TimelineUp.Obstacles.LGSDKObstacleType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleType));}},{"a":2,"n":"SteelBarrel","is":true,"t":4,"rt":$n[8].LGSDKObstacleType,"sn":"SteelBarrel","box":function ($v) { return Bridge.box($v, LGSDK.TimelineUp.Obstacles.LGSDKObstacleType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleType));}},{"a":2,"n":"WoodenBarricade","is":true,"t":4,"rt":$n[8].LGSDKObstacleType,"sn":"WoodenBarricade","box":function ($v) { return Bridge.box($v, LGSDK.TimelineUp.Obstacles.LGSDKObstacleType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleType));}}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleType end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BarrelExploded","is":true,"t":4,"rt":$n[8].LGSDKObstacleCallbackType,"sn":"BarrelExploded","box":function ($v) { return Bridge.box($v, LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType));}},{"a":2,"n":"BarricadeDestroyed","is":true,"t":4,"rt":$n[8].LGSDKObstacleCallbackType,"sn":"BarricadeDestroyed","box":function ($v) { return Bridge.box($v, LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType));}},{"a":2,"n":"Collision","is":true,"t":4,"rt":$n[8].LGSDKObstacleCallbackType,"sn":"Collision","box":function ($v) { return Bridge.box($v, LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType));}},{"a":2,"n":"Destroyed","is":true,"t":4,"rt":$n[8].LGSDKObstacleCallbackType,"sn":"Destroyed","box":function ($v) { return Bridge.box($v, LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType));}},{"a":2,"n":"LockOpened","is":true,"t":4,"rt":$n[8].LGSDKObstacleCallbackType,"sn":"LockOpened","box":function ($v) { return Bridge.box($v, LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType, System.Enum.toStringFn(LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType));}}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleCallbackType end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleDestroy","t":8,"sn":"HandleDestroy","rt":$n[1].Void},{"ov":true,"a":3,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[1].Void},{"ov":true,"a":3,"n":"InitializeObstacleType","t":8,"sn":"InitializeObstacleType","rt":$n[1].Void},{"ov":true,"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"damage","pt":$n[1].Single,"ps":0}],"sn":"TakeDamage","rt":$n[1].Void,"p":[$n[1].Single]},{"a":1,"n":"UpdateHealthDisplay","t":8,"sn":"UpdateHealthDisplay","rt":$n[1].Void}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleLock end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleTriggerEnter","t":8,"pi":[{"n":"collider","pt":$n[2].Collider,"ps":0}],"sn":"HandleTriggerEnter","rt":$n[1].Void,"p":[$n[2].Collider]},{"ov":true,"a":3,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[1].Void},{"ov":true,"a":3,"n":"InitializeObstacleType","t":8,"sn":"InitializeObstacleType","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"damage","t":4,"rt":$n[1].Single,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleDestroy","t":8,"sn":"HandleDestroy","rt":$n[1].Void},{"ov":true,"a":3,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[1].Void},{"ov":true,"a":3,"n":"InitializeObstacleType","t":8,"sn":"InitializeObstacleType","rt":$n[1].Void},{"ov":true,"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"damage","pt":$n[1].Single,"ps":0}],"sn":"TakeDamage","rt":$n[1].Void,"p":[$n[1].Single]},{"a":1,"n":"UpdateHealthDisplay","t":8,"sn":"UpdateHealthDisplay","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"goldReward","t":4,"rt":$n[1].Int32,"sn":"goldReward","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"numberTMPro","t":4,"rt":$n[7].TextMeshPro,"sn":"numberTMPro"}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel end.*/

    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade start.*/
    $m("LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleDestroy","t":8,"sn":"HandleDestroy","rt":$n[1].Void},{"ov":true,"a":3,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[1].Void},{"ov":true,"a":3,"n":"InitializeObstacleType","t":8,"sn":"InitializeObstacleType","rt":$n[1].Void},{"a":1,"n":"SetupHealthBar","t":8,"sn":"SetupHealthBar","rt":$n[1].Void},{"ov":true,"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"damage","pt":$n[1].Single,"ps":0}],"sn":"TakeDamage","rt":$n[1].Void,"p":[$n[1].Single]},{"ov":true,"a":3,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"UpdateHealthBar","t":8,"sn":"UpdateHealthBar","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"healthBarCanvas","t":4,"rt":$n[2].GameObject,"sn":"healthBarCanvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"healthBarSlider","t":4,"rt":$n[3].Slider,"sn":"healthBarSlider"},{"a":1,"n":"maxHealth","t":4,"rt":$n[1].Single,"sn":"maxHealth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LGSDK.TimelineUp.Obstacles.LGSDKObstacleWoodenBarricade end.*/

    /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBaseData start.*/
    $m("LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBaseData", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FollowerInfo","t":16,"rt":$n[1].Object,"g":{"a":2,"n":"get_FollowerInfo","t":8,"rt":$n[1].Object,"fg":"FollowerInfo"},"s":{"a":2,"n":"set_FollowerInfo","t":8,"p":[$n[1].Object],"rt":$n[1].Void,"fs":"FollowerInfo"},"fn":"FollowerInfo"},{"a":2,"n":"SumonerGate","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_SumonerGate","t":8,"rt":$n[2].GameObject,"fg":"SumonerGate"},"s":{"a":2,"n":"set_SumonerGate","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"SumonerGate"},"fn":"SumonerGate"},{"a":2,"n":"Target","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Target","t":8,"rt":$n[2].GameObject,"fg":"Target"},"s":{"a":2,"n":"set_Target","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Target"},"fn":"Target"},{"a":1,"backing":true,"n":"<FollowerInfo>k__BackingField","t":4,"rt":$n[1].Object,"sn":"FollowerInfo"},{"a":1,"backing":true,"n":"<SumonerGate>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"SumonerGate"},{"a":1,"backing":true,"n":"<Target>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Target"}]}; }, $n);
    /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBaseData end.*/

    /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior start.*/
    $m("LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior", function () { return {"nested":[Function],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetFollowerInfo","t":8,"sn":"GetFollowerInfo","rt":$n[1].Object},{"a":2,"n":"GetMaxFollower","t":8,"sn":"GetMaxFollower","rt":$n[1].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[2].Collider]},{"a":2,"n":"SetFollowerInfo","t":8,"pi":[{"n":"value","pt":$n[1].Object,"ps":0}],"sn":"SetFollowerInfo","rt":$n[1].Void,"p":[$n[1].Object]},{"a":2,"n":"followerInfo","t":4,"rt":$n[1].Object,"sn":"followerInfo"},{"a":2,"n":"maxFollower","t":4,"rt":$n[1].Int32,"sn":"maxFollower","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"OnSumonerCollisionTriggerEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnSumonerCollisionTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnSumonerCollisionTriggerEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnSumonerCollisionTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnSumonerCollisionTriggerEnter","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerGateBehavior end.*/

    /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager start.*/
    $m("LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager", function () { return {"att":385,"a":2,"s":true,"m":[{"n":".cctor","t":1,"sn":"ctor","sm":true},{"a":2,"n":"HandleSumonerCollisionEventTriggered","is":true,"t":8,"pi":[{"n":"data","pt":$n[9].LGSDKSumonerGateBaseData,"ps":0}],"sn":"HandleSumonerCollisionEventTriggered","rt":$n[1].Void,"p":[$n[9].LGSDKSumonerGateBaseData]},{"a":2,"n":"OnSumonerCollisionTriggerEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnSumonerCollisionTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnSumonerCollisionTriggerEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnSumonerCollisionTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnSumonerCollisionTriggerEnter","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*LegoTimelineUpMechanic.SumonerGate.LGSDKSumonerManager end.*/

    /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior start.*/
    $m("LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior", function () { return {"nested":[Function],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetAtkRange","t":8,"sn":"GetAtkRange","rt":$n[1].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetCurrentHealth","t":8,"sn":"GetCurrentHealth","rt":$n[1].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetMaxHealth","t":8,"sn":"GetMaxHealth","rt":$n[1].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"IsHiddenDamage","t":8,"sn":"IsHiddenDamage","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsShieldActive","t":8,"sn":"IsShieldActive","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnShieldDestroyed","t":8,"sn":"OnShieldDestroyed","rt":$n[1].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[2].Collider]},{"a":1,"n":"PatrolRoutine","t":8,"sn":"PatrolRoutine","rt":$n[5].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"damage","pt":$n[1].Single,"ps":0}],"sn":"TakeDamage","rt":$n[1].Void,"p":[$n[1].Single]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"UpdateHealthUI","t":8,"sn":"UpdateHealthUI","rt":$n[1].Void},{"a":1,"n":"UpdateText","t":8,"sn":"UpdateText","rt":$n[1].Void},{"a":2,"n":"incrementAtkRange","t":8,"pi":[{"n":"value","pt":$n[1].Single,"ps":0}],"sn":"incrementAtkRange","rt":$n[1].Single,"p":[$n[1].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"atkRange","t":4,"rt":$n[1].Single,"sn":"atkRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"atkRangeText","t":4,"rt":$n[7].TextMeshPro,"sn":"atkRangeText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentHealth","t":4,"rt":$n[1].Single,"sn":"currentHealth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"healthSlider","t":4,"rt":$n[3].Slider,"sn":"healthSlider"},{"a":1,"n":"isMovingToB","t":4,"rt":$n[1].Boolean,"sn":"isMovingToB","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxHealth","t":4,"rt":$n[1].Single,"sn":"maxHealth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Patrol Points")],"a":2,"n":"pointA","t":4,"rt":$n[2].Transform,"sn":"pointA"},{"a":2,"n":"pointB","t":4,"rt":$n[2].Transform,"sn":"pointB"},{"at":[new UnityEngine.HeaderAttribute("Patrol Settings")],"a":2,"n":"speed","t":4,"rt":$n[1].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"waitTime","t":4,"rt":$n[1].Single,"sn":"waitTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OnAtkRangeTriggerEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnAtkRangeTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnAtkRangeTriggerEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnAtkRangeTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnAtkRangeTriggerEnter","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior end.*/

    /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateBaseData start.*/
    $m("LegoTimelineUpMechanic.Gate.LGSDKSingleGateBaseData", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AtkRange","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_AtkRange","t":8,"rt":$n[1].Single,"fg":"AtkRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_AtkRange","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"AtkRange"},"fn":"AtkRange"},{"a":2,"n":"FireRate","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_FireRate","t":8,"rt":$n[1].Single,"fg":"FireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_FireRate","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"FireRate"},"fn":"FireRate"},{"a":2,"n":"IsHiddenDamage","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsHiddenDamage","t":8,"rt":$n[1].Boolean,"fg":"IsHiddenDamage","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_IsHiddenDamage","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"IsHiddenDamage"},"fn":"IsHiddenDamage"},{"a":2,"n":"SingleGate","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_SingleGate","t":8,"rt":$n[2].GameObject,"fg":"SingleGate"},"s":{"a":2,"n":"set_SingleGate","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"SingleGate"},"fn":"SingleGate"},{"a":2,"n":"Target","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Target","t":8,"rt":$n[2].GameObject,"fg":"Target"},"s":{"a":2,"n":"set_Target","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Target"},"fn":"Target"},{"a":1,"backing":true,"n":"<AtkRange>k__BackingField","t":4,"rt":$n[1].Single,"sn":"AtkRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<FireRate>k__BackingField","t":4,"rt":$n[1].Single,"sn":"FireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<IsHiddenDamage>k__BackingField","t":4,"rt":$n[1].Boolean,"sn":"IsHiddenDamage","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<SingleGate>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"SingleGate"},{"a":1,"backing":true,"n":"<Target>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Target"}]}; }, $n);
    /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateBaseData end.*/

    /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior start.*/
    $m("LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior", function () { return {"nested":[Function],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetCurrentHealth","t":8,"sn":"GetCurrentHealth","rt":$n[1].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetFireRate","t":8,"sn":"GetFireRate","rt":$n[1].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetMaxHealth","t":8,"sn":"GetMaxHealth","rt":$n[1].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"IsHiddenDamage","t":8,"sn":"IsHiddenDamage","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsShieldActive","t":8,"sn":"IsShieldActive","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnShieldDestroyed","t":8,"sn":"OnShieldDestroyed","rt":$n[1].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[2].Collider]},{"a":1,"n":"PatrolRoutine","t":8,"sn":"PatrolRoutine","rt":$n[5].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"TakeDamage","t":8,"pi":[{"n":"damage","pt":$n[1].Single,"ps":0}],"sn":"TakeDamage","rt":$n[1].Void,"p":[$n[1].Single]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"UpdateHealthUI","t":8,"sn":"UpdateHealthUI","rt":$n[1].Void},{"a":1,"n":"UpdateText","t":8,"sn":"UpdateText","rt":$n[1].Void},{"a":2,"n":"incrementFireRate","t":8,"pi":[{"n":"value","pt":$n[1].Single,"ps":0}],"sn":"incrementFireRate","rt":$n[1].Single,"p":[$n[1].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentHealth","t":4,"rt":$n[1].Single,"sn":"currentHealth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fireRate","t":4,"rt":$n[1].Single,"sn":"fireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("UI Display"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fireRateText","t":4,"rt":$n[7].TextMeshPro,"sn":"fireRateText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"healthSlider","t":4,"rt":$n[3].Slider,"sn":"healthSlider"},{"a":1,"n":"isMovingToB","t":4,"rt":$n[1].Boolean,"sn":"isMovingToB","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxHealth","t":4,"rt":$n[1].Single,"sn":"maxHealth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Patrol Points")],"a":2,"n":"pointA","t":4,"rt":$n[2].Transform,"sn":"pointA"},{"a":2,"n":"pointB","t":4,"rt":$n[2].Transform,"sn":"pointB"},{"at":[new UnityEngine.HeaderAttribute("Patrol Settings")],"a":2,"n":"speed","t":4,"rt":$n[1].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"waitTime","t":4,"rt":$n[1].Single,"sn":"waitTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OnFireRateTriggerEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnFireRateTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnFireRateTriggerEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnFireRateTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnFireRateTriggerEnter","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior end.*/

    /*LegoTimelineUpMechanic.Gate.LGSDKSingGateManager start.*/
    $m("LegoTimelineUpMechanic.Gate.LGSDKSingGateManager", function () { return {"att":385,"a":2,"s":true,"m":[{"n":".cctor","t":1,"sn":"ctor","sm":true},{"a":2,"n":"HandleAtkRangeEventTriggered","is":true,"t":8,"pi":[{"n":"data","pt":$n[10].LGSDKSingleGateBaseData,"ps":0}],"sn":"HandleAtkRangeEventTriggered","rt":$n[1].Void,"p":[$n[10].LGSDKSingleGateBaseData]},{"a":2,"n":"HandleFireRateEventTriggered","is":true,"t":8,"pi":[{"n":"data","pt":$n[10].LGSDKSingleGateBaseData,"ps":0}],"sn":"HandleFireRateEventTriggered","rt":$n[1].Void,"p":[$n[10].LGSDKSingleGateBaseData]},{"a":2,"n":"OnAtkRangeTriggerEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnAtkRangeTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnAtkRangeTriggerEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnAtkRangeTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnAtkRangeTriggerEnter","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnFireRateTriggerEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnFireRateTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnFireRateTriggerEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnFireRateTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnFireRateTriggerEnter","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*LegoTimelineUpMechanic.Gate.LGSDKSingGateManager end.*/

    /*LegoSDK.Prop.LGSDKCoinEventData start.*/
    $m("LegoSDK.Prop.LGSDKCoinEventData", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Coin","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Coin","t":8,"rt":$n[2].GameObject,"fg":"Coin"},"s":{"a":2,"n":"set_Coin","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Coin"},"fn":"Coin"},{"a":2,"n":"CoinCollector","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_CoinCollector","t":8,"rt":$n[2].GameObject,"fg":"CoinCollector"},"s":{"a":2,"n":"set_CoinCollector","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"CoinCollector"},"fn":"CoinCollector"},{"a":2,"n":"Target","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Target","t":8,"rt":$n[2].GameObject,"fg":"Target"},"s":{"a":2,"n":"set_Target","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Target"},"fn":"Target"},{"a":2,"n":"Value","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_Value","t":8,"rt":$n[1].Int32,"fg":"Value","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Value","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"Value"},"fn":"Value"},{"a":1,"backing":true,"n":"<Coin>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Coin"},{"a":1,"backing":true,"n":"<CoinCollector>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"CoinCollector"},{"a":1,"backing":true,"n":"<Target>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Target"},{"a":1,"backing":true,"n":"<Value>k__BackingField","t":4,"rt":$n[1].Int32,"sn":"Value","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*LegoSDK.Prop.LGSDKCoinEventData end.*/

    /*LegoSDK.Prop.LGSDKGoldCoin start.*/
    $m("LegoSDK.Prop.LGSDKGoldCoin", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[2].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void}]}; }, $n);
    /*LegoSDK.Prop.LGSDKGoldCoin end.*/

    /*LegoSDK.Prop.LGSDKPropManager start.*/
    $m("LegoSDK.Prop.LGSDKPropManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"TriggerCoinEnter","is":true,"t":8,"pi":[{"n":"data","pt":$n[6].LGSDKCoinEventData,"ps":0}],"sn":"TriggerCoinEnter","rt":$n[1].Void,"p":[$n[6].LGSDKCoinEventData]},{"a":2,"n":"TriggerLootBulletEnter","is":true,"t":8,"pi":[{"n":"data","pt":$n[6].LGSDKLootEventData,"ps":0}],"sn":"TriggerLootBulletEnter","rt":$n[1].Void,"p":[$n[6].LGSDKLootEventData]},{"a":2,"n":"TriggerLootCharactorEnter","is":true,"t":8,"pi":[{"n":"data","pt":$n[6].LGSDKLootEventData,"ps":0}],"sn":"TriggerLootCharactorEnter","rt":$n[1].Void,"p":[$n[6].LGSDKLootEventData]},{"a":2,"n":"TriggerWarriorEnter","is":true,"t":8,"pi":[{"n":"data","pt":$n[6].LGSDKWarriorEventData,"ps":0}],"sn":"TriggerWarriorEnter","rt":$n[1].Void,"p":[$n[6].LGSDKWarriorEventData]},{"a":2,"n":"TriggerWarriorPrisonBulletEnter","is":true,"t":8,"pi":[{"n":"data","pt":$n[6].LGSDKWarriorPrisonEventData,"ps":0}],"sn":"TriggerWarriorPrisonBulletEnter","rt":$n[1].Void,"p":[$n[6].LGSDKWarriorPrisonEventData]},{"a":2,"n":"TriggerWarriorPrisonCharactorEnter","is":true,"t":8,"pi":[{"n":"data","pt":$n[6].LGSDKWarriorPrisonEventData,"ps":0}],"sn":"TriggerWarriorPrisonCharactorEnter","rt":$n[1].Void,"p":[$n[6].LGSDKWarriorPrisonEventData]},{"a":2,"n":"OnCoinTriggerEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnCoinTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnCoinTriggerEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnCoinTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnCoinTriggerEnter","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnLootTriggerBulletEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnLootTriggerBulletEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnLootTriggerBulletEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnLootTriggerBulletEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnLootTriggerBulletEnter","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnLootTriggerCharactorEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnLootTriggerCharactorEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnLootTriggerCharactorEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnLootTriggerCharactorEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnLootTriggerCharactorEnter","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnWarriorPrisonTriggerBulletEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnWarriorPrisonTriggerBulletEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnWarriorPrisonTriggerBulletEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnWarriorPrisonTriggerBulletEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnWarriorPrisonTriggerBulletEnter","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnWarriorPrisonTriggerCharactorEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnWarriorPrisonTriggerCharactorEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnWarriorPrisonTriggerCharactorEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnWarriorPrisonTriggerCharactorEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnWarriorPrisonTriggerCharactorEnter","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnWarriorTriggerEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnWarriorTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnWarriorTriggerEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnWarriorTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnWarriorTriggerEnter","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*LegoSDK.Prop.LGSDKPropManager end.*/

    /*LegoSDK.Prop.LGSDKLootEventData start.*/
    $m("LegoSDK.Prop.LGSDKLootEventData", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DamePopup","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_DamePopup","t":8,"rt":$n[2].GameObject,"fg":"DamePopup"},"s":{"a":2,"n":"set_DamePopup","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"DamePopup"},"fn":"DamePopup"},{"a":2,"n":"Experience","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_Experience","t":8,"rt":$n[1].Int32,"fg":"Experience","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Experience","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"Experience"},"fn":"Experience"},{"a":2,"n":"HitPoint","t":16,"rt":$n[2].Transform,"g":{"a":2,"n":"get_HitPoint","t":8,"rt":$n[2].Transform,"fg":"HitPoint"},"s":{"a":2,"n":"set_HitPoint","t":8,"p":[$n[2].Transform],"rt":$n[1].Void,"fs":"HitPoint"},"fn":"HitPoint"},{"a":2,"n":"Layers","t":16,"rt":$n[4].List$1(UnityEngine.Transform),"g":{"a":2,"n":"get_Layers","t":8,"rt":$n[4].List$1(UnityEngine.Transform),"fg":"Layers"},"s":{"a":2,"n":"set_Layers","t":8,"p":[$n[4].List$1(UnityEngine.Transform)],"rt":$n[1].Void,"fs":"Layers"},"fn":"Layers"},{"a":2,"n":"Loot","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Loot","t":8,"rt":$n[2].GameObject,"fg":"Loot"},"s":{"a":2,"n":"set_Loot","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Loot"},"fn":"Loot"},{"a":2,"n":"Target","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Target","t":8,"rt":$n[2].GameObject,"fg":"Target"},"s":{"a":2,"n":"set_Target","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Target"},"fn":"Target"},{"a":1,"backing":true,"n":"<DamePopup>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"DamePopup"},{"a":1,"backing":true,"n":"<Experience>k__BackingField","t":4,"rt":$n[1].Int32,"sn":"Experience","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<HitPoint>k__BackingField","t":4,"rt":$n[2].Transform,"sn":"HitPoint"},{"a":1,"backing":true,"n":"<Layers>k__BackingField","t":4,"rt":$n[4].List$1(UnityEngine.Transform),"sn":"Layers"},{"a":1,"backing":true,"n":"<Loot>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Loot"},{"a":1,"backing":true,"n":"<Target>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Target"}]}; }, $n);
    /*LegoSDK.Prop.LGSDKLootEventData end.*/

    /*LegoSDK.Prop.LGSDKWarrior start.*/
    $m("LegoSDK.Prop.LGSDKWarrior", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"LevelUp","t":8,"sn":"LevelUp","rt":$n[1].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[2].Collider]},{"a":2,"n":"ReleaseWarrior","t":8,"sn":"ReleaseWarrior","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"bulletPrefab","t":4,"rt":$n[2].GameObject,"sn":"bulletPrefab"},{"a":1,"n":"currentWaypointIndex","t":4,"rt":$n[1].Int32,"sn":"currentWaypointIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"damage","t":4,"rt":$n[1].Single,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"fireRate","t":4,"rt":$n[1].Single,"sn":"fireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isMovePoint","t":4,"rt":$n[1].Boolean,"sn":"isMovePoint","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"level","t":4,"rt":$n[1].Int32,"sn":"level","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"maxDistance","t":4,"rt":$n[1].Single,"sn":"maxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"moveSpeed","t":4,"rt":$n[1].Int32,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("Ch\u1ecdn object ch\u1ee9a c\u00e1c waypoint")],"a":2,"n":"waypointGroup","t":4,"rt":$n[2].Transform,"sn":"waypointGroup"},{"a":1,"n":"waypoints","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"waypoints"}]}; }, $n);
    /*LegoSDK.Prop.LGSDKWarrior end.*/

    /*LegoSDK.Prop.LGSDKWarriorEventData start.*/
    $m("LegoSDK.Prop.LGSDKWarriorEventData", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Level","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_Level","t":8,"rt":$n[1].Int32,"fg":"Level","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Level","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"Level"},"fn":"Level"},{"a":2,"n":"ReleasePositions","t":16,"rt":System.Array.type(UnityEngine.Transform),"g":{"a":2,"n":"get_ReleasePositions","t":8,"rt":System.Array.type(UnityEngine.Transform),"fg":"ReleasePositions"},"s":{"a":2,"n":"set_ReleasePositions","t":8,"p":[System.Array.type(UnityEngine.Transform)],"rt":$n[1].Void,"fs":"ReleasePositions"},"fn":"ReleasePositions"},{"a":2,"n":"Target","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Target","t":8,"rt":$n[2].GameObject,"fg":"Target"},"s":{"a":2,"n":"set_Target","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Target"},"fn":"Target"},{"a":2,"n":"Warrior","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Warrior","t":8,"rt":$n[2].GameObject,"fg":"Warrior"},"s":{"a":2,"n":"set_Warrior","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Warrior"},"fn":"Warrior"},{"a":2,"n":"bulletPrefab","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_bulletPrefab","t":8,"rt":$n[2].GameObject,"fg":"bulletPrefab"},"s":{"a":2,"n":"set_bulletPrefab","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"bulletPrefab"},"fn":"bulletPrefab"},{"a":2,"n":"damage","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_damage","t":8,"rt":$n[1].Single,"fg":"damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_damage","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"damage"},"fn":"damage"},{"a":2,"n":"fireRate","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_fireRate","t":8,"rt":$n[1].Single,"fg":"fireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_fireRate","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"fireRate"},"fn":"fireRate"},{"a":2,"n":"maxDistance","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_maxDistance","t":8,"rt":$n[1].Single,"fg":"maxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_maxDistance","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"maxDistance"},"fn":"maxDistance"},{"a":1,"backing":true,"n":"<Level>k__BackingField","t":4,"rt":$n[1].Int32,"sn":"Level","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<ReleasePositions>k__BackingField","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"ReleasePositions"},{"a":1,"backing":true,"n":"<Target>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Target"},{"a":1,"backing":true,"n":"<Warrior>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Warrior"},{"a":1,"backing":true,"n":"<bulletPrefab>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"bulletPrefab"},{"a":1,"backing":true,"n":"<damage>k__BackingField","t":4,"rt":$n[1].Single,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<fireRate>k__BackingField","t":4,"rt":$n[1].Single,"sn":"fireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<maxDistance>k__BackingField","t":4,"rt":$n[1].Single,"sn":"maxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LegoSDK.Prop.LGSDKWarriorEventData end.*/

    /*LegoSDK.Prop.LGSDKWarriorPrisonEventData start.*/
    $m("LegoSDK.Prop.LGSDKWarriorPrisonEventData", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Level","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_Level","t":8,"rt":$n[1].Int32,"fg":"Level","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Level","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"Level"},"fn":"Level"},{"a":2,"n":"Prison","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Prison","t":8,"rt":$n[2].GameObject,"fg":"Prison"},"s":{"a":2,"n":"set_Prison","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Prison"},"fn":"Prison"},{"a":2,"n":"ReleasePositions","t":16,"rt":System.Array.type(UnityEngine.Transform),"g":{"a":2,"n":"get_ReleasePositions","t":8,"rt":System.Array.type(UnityEngine.Transform),"fg":"ReleasePositions"},"s":{"a":2,"n":"set_ReleasePositions","t":8,"p":[System.Array.type(UnityEngine.Transform)],"rt":$n[1].Void,"fs":"ReleasePositions"},"fn":"ReleasePositions"},{"a":2,"n":"Target","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Target","t":8,"rt":$n[2].GameObject,"fg":"Target"},"s":{"a":2,"n":"set_Target","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Target"},"fn":"Target"},{"a":2,"n":"Warriors","t":16,"rt":$n[4].List$1(LegoSDK.Prop.LGSDKWarrior),"g":{"a":2,"n":"get_Warriors","t":8,"rt":$n[4].List$1(LegoSDK.Prop.LGSDKWarrior),"fg":"Warriors"},"s":{"a":2,"n":"set_Warriors","t":8,"p":[$n[4].List$1(LegoSDK.Prop.LGSDKWarrior)],"rt":$n[1].Void,"fs":"Warriors"},"fn":"Warriors"},{"a":1,"backing":true,"n":"<Level>k__BackingField","t":4,"rt":$n[1].Int32,"sn":"Level","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<Prison>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Prison"},{"a":1,"backing":true,"n":"<ReleasePositions>k__BackingField","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"ReleasePositions"},{"a":1,"backing":true,"n":"<Target>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Target"},{"a":1,"backing":true,"n":"<Warriors>k__BackingField","t":4,"rt":$n[4].List$1(LegoSDK.Prop.LGSDKWarrior),"sn":"Warriors"}]}; }, $n);
    /*LegoSDK.Prop.LGSDKWarriorPrisonEventData end.*/

    /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample start.*/
    $m("LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"HandleAtkRangeGateCollision","t":8,"pi":[{"n":"data","pt":$n[10].LGSDKSingleGateBaseData,"ps":0}],"sn":"HandleAtkRangeGateCollision","rt":$n[1].Void,"p":[$n[10].LGSDKSingleGateBaseData]},{"a":1,"n":"HandleBulletCollision","t":8,"pi":[{"n":"data","pt":$n[11].BulletEventData,"ps":0}],"sn":"HandleBulletCollision","rt":$n[1].Void,"p":[$n[11].BulletEventData]},{"a":1,"n":"HandleBulletWithSingleGateCollision","t":8,"pi":[{"n":"data","pt":$n[11].BulletEventData,"ps":0}],"sn":"HandleBulletWithSingleGateCollision","rt":$n[1].Void,"p":[$n[11].BulletEventData]},{"a":1,"n":"HandleCoinCollected","t":8,"pi":[{"n":"data","pt":$n[6].LGSDKCoinEventData,"ps":0}],"sn":"HandleCoinCollected","rt":$n[1].Void,"p":[$n[6].LGSDKCoinEventData]},{"a":1,"n":"HandleFireRateGateCollision","t":8,"pi":[{"n":"data","pt":$n[10].LGSDKSingleGateBaseData,"ps":0}],"sn":"HandleFireRateGateCollision","rt":$n[1].Void,"p":[$n[10].LGSDKSingleGateBaseData]},{"a":1,"n":"HandleFollowerCollision","t":8,"pi":[{"n":"data","pt":$n[0].FollowerEventData,"ps":0}],"sn":"HandleFollowerCollision","rt":$n[1].Void,"p":[$n[0].FollowerEventData]},{"a":1,"n":"HandleLeaderCollision","t":8,"pi":[{"n":"data","pt":$n[12].LeaderEventData,"ps":0}],"sn":"HandleLeaderCollision","rt":$n[1].Void,"p":[$n[12].LeaderEventData]},{"a":1,"n":"HandleSumonerCollision","t":8,"pi":[{"n":"data","pt":$n[9].LGSDKSumonerGateBaseData,"ps":0}],"sn":"HandleSumonerCollision","rt":$n[1].Void,"p":[$n[9].LGSDKSumonerGateBaseData]},{"a":1,"n":"HandleWarriorCollision","t":8,"pi":[{"n":"data","pt":$n[6].LGSDKWarriorEventData,"ps":0}],"sn":"HandleWarriorCollision","rt":$n[1].Void,"p":[$n[6].LGSDKWarriorEventData]},{"a":1,"n":"IncreaseFireRateOrDamage","t":8,"pi":[{"n":"data","pt":$n[10].LGSDKSingleGateBaseData,"ps":0},{"n":"targetProperty","pt":$n[1].String,"ps":1}],"sn":"IncreaseFireRateOrDamage","rt":$n[1].Void,"p":[$n[10].LGSDKSingleGateBaseData,$n[1].String]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"a":2,"n":"SetFollowerInfo","t":8,"pi":[{"n":"SumonerGate","pt":$n[9].LGSDKSumonerGateBehavior,"ps":0},{"n":"follower","pt":$n[13].LGSDKFollowerInitialInfo,"ps":1}],"sn":"SetFollowerInfo","rt":$n[1].Void,"p":[$n[9].LGSDKSumonerGateBehavior,$n[13].LGSDKFollowerInitialInfo]},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[14].LGSDKGameControllerExample,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[14].LGSDKGameControllerExample,"fg":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"instance","is":true,"t":4,"rt":$n[14].LGSDKGameControllerExample,"sn":"instance"}]}; }, $n);
    /*LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample end.*/

    /*LegoSDK.Leader.LeaderEventData start.*/
    $m("LegoSDK.Leader.LeaderEventData", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Leader","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Leader","t":8,"rt":$n[2].GameObject,"fg":"Leader"},"s":{"a":2,"n":"set_Leader","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Leader"},"fn":"Leader"},{"a":2,"n":"Target","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Target","t":8,"rt":$n[2].GameObject,"fg":"Target"},"s":{"a":2,"n":"set_Target","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Target"},"fn":"Target"},{"a":1,"backing":true,"n":"<Leader>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Leader"},{"a":1,"backing":true,"n":"<Target>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Target"}]}; }, $n);
    /*LegoSDK.Leader.LeaderEventData end.*/

    /*LegoSDK.Leader.LGSDKLeaderManager start.*/
    $m("LegoSDK.Leader.LGSDKLeaderManager", function () { return {"att":385,"a":2,"s":true,"m":[{"n":".cctor","t":1,"sn":"ctor","sm":true},{"a":2,"n":"ClearSubscribers","is":true,"t":8,"sn":"ClearSubscribers","rt":$n[1].Void},{"a":2,"n":"HandleLeaderEventTriggered","is":true,"t":8,"pi":[{"n":"data","pt":$n[12].LeaderEventData,"ps":0}],"sn":"HandleLeaderEventTriggered","rt":$n[1].Void,"p":[$n[12].LeaderEventData]},{"a":2,"n":"Unsubscribe","is":true,"t":8,"sn":"Unsubscribe","rt":$n[1].Void},{"a":1,"n":"isSubscribed","is":true,"t":4,"rt":$n[1].Boolean,"sn":"isSubscribed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnLeaderTriggerEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnLeaderTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnLeaderTriggerEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnLeaderTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnLeaderTriggerEnter","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*LegoSDK.Leader.LGSDKLeaderManager end.*/

    /*LegoSDK.FollowerInitialInfo.LGSDKFollowerInitialInfo start.*/
    $m("LegoSDK.FollowerInitialInfo.LGSDKFollowerInitialInfo", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Warrior","t":4,"rt":$n[2].GameObject,"sn":"Warrior"},{"a":2,"n":"bulletPrefab","t":4,"rt":$n[2].GameObject,"sn":"bulletPrefab"},{"a":2,"n":"damage","t":4,"rt":$n[1].Single,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"fireRate","t":4,"rt":$n[1].Single,"sn":"fireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"level","t":4,"rt":$n[1].Int32,"sn":"level","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"maxDistance","t":4,"rt":$n[1].Single,"sn":"maxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LegoSDK.FollowerInitialInfo.LGSDKFollowerInitialInfo end.*/

    /*LegoSDK.FollowerDataGroup.FollowerInfo start.*/
    $m("LegoSDK.FollowerDataGroup.FollowerInfo", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"bulletPrefab","t":4,"rt":$n[2].GameObject,"sn":"bulletPrefab"},{"a":2,"n":"damage","t":4,"rt":$n[1].Single,"sn":"damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"fireRate","t":4,"rt":$n[1].Single,"sn":"fireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"level","t":4,"rt":$n[1].Int32,"sn":"level","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"maxDistance","t":4,"rt":$n[1].Single,"sn":"maxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LegoSDK.FollowerDataGroup.FollowerInfo end.*/

    /*LegoSDK.FollowerDataGroup.LGSDKFollowerDataGroup start.*/
    $m("LegoSDK.FollowerDataGroup.LGSDKFollowerDataGroup", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"followers","t":4,"rt":$n[4].List$1(LegoSDK.FollowerDataGroup.FollowerInfo),"sn":"followers"}]}; }, $n);
    /*LegoSDK.FollowerDataGroup.LGSDKFollowerDataGroup end.*/

    /*LegoSDK.Follower.FollowerEventData start.*/
    $m("LegoSDK.Follower.FollowerEventData", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Follower","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Follower","t":8,"rt":$n[2].GameObject,"fg":"Follower"},"s":{"a":2,"n":"set_Follower","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Follower"},"fn":"Follower"},{"a":2,"n":"Target","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Target","t":8,"rt":$n[2].GameObject,"fg":"Target"},"s":{"a":2,"n":"set_Target","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Target"},"fn":"Target"},{"a":1,"backing":true,"n":"<Follower>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Follower"},{"a":1,"backing":true,"n":"<Target>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Target"}]}; }, $n);
    /*LegoSDK.Follower.FollowerEventData end.*/

    /*LegoSDK.Follower.LGSDKFollowerManager start.*/
    $m("LegoSDK.Follower.LGSDKFollowerManager", function () { return {"att":385,"a":2,"s":true,"m":[{"n":".cctor","t":1,"sn":"ctor","sm":true},{"a":2,"n":"ClearSubscribers","is":true,"t":8,"sn":"ClearSubscribers","rt":$n[1].Void},{"a":2,"n":"HandleFollowerEventTriggered","is":true,"t":8,"pi":[{"n":"data","pt":$n[0].FollowerEventData,"ps":0}],"sn":"HandleFollowerEventTriggered","rt":$n[1].Void,"p":[$n[0].FollowerEventData]},{"a":2,"n":"Unsubscribe","is":true,"t":8,"sn":"Unsubscribe","rt":$n[1].Void},{"a":1,"n":"isSubscribed","is":true,"t":4,"rt":$n[1].Boolean,"sn":"isSubscribed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnFollowerTriggerEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnFollowerTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnFollowerTriggerEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnFollowerTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnFollowerTriggerEnter","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*LegoSDK.Follower.LGSDKFollowerManager end.*/

    /*LegoSDK.Bullet.BulletEventData start.*/
    $m("LegoSDK.Bullet.BulletEventData", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Bullet","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Bullet","t":8,"rt":$n[2].GameObject,"fg":"Bullet"},"s":{"a":2,"n":"set_Bullet","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Bullet"},"fn":"Bullet"},{"a":2,"n":"Damage","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_Damage","t":8,"rt":$n[1].Single,"fg":"Damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_Damage","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"Damage"},"fn":"Damage"},{"a":2,"n":"FireRate","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_FireRate","t":8,"rt":$n[1].Single,"fg":"FireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_FireRate","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"FireRate"},"fn":"FireRate"},{"a":2,"n":"MaxDistance","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get_MaxDistance","t":8,"rt":$n[1].Single,"fg":"MaxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MaxDistance","t":8,"p":[$n[1].Single],"rt":$n[1].Void,"fs":"MaxDistance"},"fn":"MaxDistance"},{"a":2,"n":"Target","t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_Target","t":8,"rt":$n[2].GameObject,"fg":"Target"},"s":{"a":2,"n":"set_Target","t":8,"p":[$n[2].GameObject],"rt":$n[1].Void,"fs":"Target"},"fn":"Target"},{"a":1,"backing":true,"n":"<Bullet>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Bullet"},{"a":1,"backing":true,"n":"<Damage>k__BackingField","t":4,"rt":$n[1].Single,"sn":"Damage","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<FireRate>k__BackingField","t":4,"rt":$n[1].Single,"sn":"FireRate","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<MaxDistance>k__BackingField","t":4,"rt":$n[1].Single,"sn":"MaxDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<Target>k__BackingField","t":4,"rt":$n[2].GameObject,"sn":"Target"}]}; }, $n);
    /*LegoSDK.Bullet.BulletEventData end.*/

    /*LegoSDK.Bullet.LGSDKBulletManager start.*/
    $m("LegoSDK.Bullet.LGSDKBulletManager", function () { return {"att":385,"a":2,"s":true,"m":[{"n":".cctor","t":1,"sn":"ctor","sm":true},{"a":2,"n":"ClearSubscribers","is":true,"t":8,"sn":"ClearSubscribers","rt":$n[1].Void},{"a":2,"n":"HandleBulletEventTriggered","is":true,"t":8,"pi":[{"n":"data","pt":$n[11].BulletEventData,"ps":0}],"sn":"HandleBulletEventTriggered","rt":$n[1].Void,"p":[$n[11].BulletEventData]},{"a":2,"n":"Unsubscribe","is":true,"t":8,"sn":"Unsubscribe","rt":$n[1].Void},{"a":1,"n":"isSubscribed","is":true,"t":4,"rt":$n[1].Boolean,"sn":"isSubscribed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnBulletTriggerEnter","is":true,"t":2,"ad":{"a":2,"n":"add_OnBulletTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnBulletTriggerEnter","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnBulletTriggerEnter","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnBulletTriggerEnter","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*LegoSDK.Bullet.LGSDKBulletManager end.*/

    }});
