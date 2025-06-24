var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointSpring' )
  var i487 = data
  i486.spring = i487[0]
  i486.damper = i487[1]
  i486.targetPosition = i487[2]
  return i486
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointMotor' )
  var i489 = data
  i488.m_TargetVelocity = i489[0]
  i488.m_Force = i489[1]
  i488.m_FreeSpin = i489[2]
  return i488
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointLimits' )
  var i491 = data
  i490.m_Min = i491[0]
  i490.m_Max = i491[1]
  i490.m_Bounciness = i491[2]
  i490.m_BounceMinVelocity = i491[3]
  i490.m_ContactDistance = i491[4]
  i490.minBounce = i491[5]
  i490.maxBounce = i491[6]
  return i490
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointDrive' )
  var i493 = data
  i492.m_PositionSpring = i493[0]
  i492.m_PositionDamper = i493[1]
  i492.m_MaximumForce = i493[2]
  i492.m_UseAcceleration = i493[3]
  return i492
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i495 = data
  i494.m_Spring = i495[0]
  i494.m_Damper = i495[1]
  return i494
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i497 = data
  i496.m_Limit = i497[0]
  i496.m_Bounciness = i497[1]
  i496.m_ContactDistance = i497[2]
  return i496
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i499 = data
  i498.m_ExtremumSlip = i499[0]
  i498.m_ExtremumValue = i499[1]
  i498.m_AsymptoteSlip = i499[2]
  i498.m_AsymptoteValue = i499[3]
  i498.m_Stiffness = i499[4]
  return i498
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i501 = data
  i500.m_LowerAngle = i501[0]
  i500.m_UpperAngle = i501[1]
  return i500
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i503 = data
  i502.m_MotorSpeed = i503[0]
  i502.m_MaximumMotorTorque = i503[1]
  return i502
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i505 = data
  i504.m_DampingRatio = i505[0]
  i504.m_Frequency = i505[1]
  i504.m_Angle = i505[2]
  return i504
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i507 = data
  i506.m_LowerTranslation = i507[0]
  i506.m_UpperTranslation = i507[1]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i509 = data
  i508.name = i509[0]
  i508.halfPrecision = !!i509[1]
  i508.useUInt32IndexFormat = !!i509[2]
  i508.vertexCount = i509[3]
  i508.aabb = i509[4]
  var i511 = i509[5]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( !!i511[i + 0] );
  }
  i508.streams = i510
  i508.vertices = i509[6]
  var i513 = i509[7]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i513[i + 0]) );
  }
  i508.subMeshes = i512
  var i515 = i509[8]
  var i514 = []
  for(var i = 0; i < i515.length; i += 16) {
    i514.push( new pc.Mat4().setData(i515[i + 0], i515[i + 1], i515[i + 2], i515[i + 3],  i515[i + 4], i515[i + 5], i515[i + 6], i515[i + 7],  i515[i + 8], i515[i + 9], i515[i + 10], i515[i + 11],  i515[i + 12], i515[i + 13], i515[i + 14], i515[i + 15]) );
  }
  i508.bindposes = i514
  var i517 = i509[9]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i517[i + 0]) );
  }
  i508.blendShapes = i516
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i523 = data
  i522.triangles = i523[0]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i529 = data
  i528.name = i529[0]
  var i531 = i529[1]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i531[i + 0]) );
  }
  i528.frames = i530
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i532 = root || new pc.UnityMaterial()
  var i533 = data
  i532.name = i533[0]
  request.r(i533[1], i533[2], 0, i532, 'shader')
  i532.renderQueue = i533[3]
  i532.enableInstancing = !!i533[4]
  var i535 = i533[5]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i535[i + 0]) );
  }
  i532.floatParameters = i534
  var i537 = i533[6]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i537[i + 0]) );
  }
  i532.colorParameters = i536
  var i539 = i533[7]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i539[i + 0]) );
  }
  i532.vectorParameters = i538
  var i541 = i533[8]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i541[i + 0]) );
  }
  i532.textureParameters = i540
  var i543 = i533[9]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i543[i + 0]) );
  }
  i532.materialFlags = i542
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i547 = data
  i546.name = i547[0]
  i546.value = i547[1]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i551 = data
  i550.name = i551[0]
  i550.value = new pc.Color(i551[1], i551[2], i551[3], i551[4])
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i555 = data
  i554.name = i555[0]
  i554.value = new pc.Vec4( i555[1], i555[2], i555[3], i555[4] )
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i559 = data
  i558.name = i559[0]
  request.r(i559[1], i559[2], 0, i558, 'value')
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i563 = data
  i562.name = i563[0]
  i562.enabled = !!i563[1]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i565 = data
  i564.name = i565[0]
  i564.width = i565[1]
  i564.height = i565[2]
  i564.mipmapCount = i565[3]
  i564.anisoLevel = i565[4]
  i564.filterMode = i565[5]
  i564.hdr = !!i565[6]
  i564.format = i565[7]
  i564.wrapMode = i565[8]
  i564.alphaIsTransparency = !!i565[9]
  i564.alphaSource = i565[10]
  i564.graphicsFormat = i565[11]
  i564.sRGBTexture = !!i565[12]
  i564.desiredColorSpace = i565[13]
  i564.wrapU = i565[14]
  i564.wrapV = i565[15]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i567 = data
  i566.position = new pc.Vec3( i567[0], i567[1], i567[2] )
  i566.scale = new pc.Vec3( i567[3], i567[4], i567[5] )
  i566.rotation = new pc.Quat(i567[6], i567[7], i567[8], i567[9])
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'sharedMesh')
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i571 = data
  request.r(i571[0], i571[1], 0, i570, 'additionalVertexStreams')
  i570.enabled = !!i571[2]
  request.r(i571[3], i571[4], 0, i570, 'sharedMaterial')
  var i573 = i571[5]
  var i572 = []
  for(var i = 0; i < i573.length; i += 2) {
  request.r(i573[i + 0], i573[i + 1], 2, i572, '')
  }
  i570.sharedMaterials = i572
  i570.receiveShadows = !!i571[6]
  i570.shadowCastingMode = i571[7]
  i570.sortingLayerID = i571[8]
  i570.sortingOrder = i571[9]
  i570.lightmapIndex = i571[10]
  i570.lightmapSceneIndex = i571[11]
  i570.lightmapScaleOffset = new pc.Vec4( i571[12], i571[13], i571[14], i571[15] )
  i570.lightProbeUsage = i571[16]
  i570.reflectionProbeUsage = i571[17]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i577 = data
  i576.center = new pc.Vec3( i577[0], i577[1], i577[2] )
  i576.radius = i577[3]
  i576.height = i577[4]
  i576.direction = i577[5]
  i576.enabled = !!i577[6]
  i576.isTrigger = !!i577[7]
  request.r(i577[8], i577[9], 0, i576, 'material')
  return i576
}

Deserializers["LGSDKLeaderCharacterController"] = function (request, data, root) {
  var i578 = root || request.c( 'LGSDKLeaderCharacterController' )
  var i579 = data
  var i581 = i579[0]
  var i580 = new (System.Collections.Generic.List$1(Bridge.ns('LegoSDK.FollowerInitialInfo.LGSDKFollowerInitialInfo')))
  for(var i = 0; i < i581.length; i += 1) {
    i580.add(request.d('LegoSDK.FollowerInitialInfo.LGSDKFollowerInitialInfo', i581[i + 0]));
  }
  i578.initialFollowers = i580
  request.r(i579[1], i579[2], 0, i578, 'bulletPrefabsByLevel')
  var i583 = i579[3]
  var i582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i583.length; i += 2) {
  request.r(i583[i + 0], i583[i + 1], 1, i582, '')
  }
  i578.bulletPrefabsByLevelList = i582
  i578.moveSpeed = i579[4]
  i578.sideSpeed = i579[5]
  i578.maxSideOffset = i579[6]
  request.r(i579[7], i579[8], 0, i578, 'bulletSpawnPoint')
  i578.columns = i579[9]
  i578.spacingX = i579[10]
  i578.spacingZ = i579[11]
  request.r(i579[12], i579[13], 0, i578, 'flowerCharacterPrefab')
  i578.followersPerRing = i579[14]
  i578.ringSpacing = i579[15]
  i578.followerRadius = i579[16]
  i578.level = i579[17]
  i578.damage = i579[18]
  i578.maxDistance = i579[19]
  i578.fireRate = i579[20]
  i578.LEVEL_UP_DAMAGE = i579[21]
  i578.LEVEL_UP_MAX_DISTANCE = i579[22]
  i578.LEVEL_UP_FIRE_RATE = i579[23]
  return i578
}

Deserializers["LegoSDK.FollowerInitialInfo.LGSDKFollowerInitialInfo"] = function (request, data, root) {
  var i586 = root || request.c( 'LegoSDK.FollowerInitialInfo.LGSDKFollowerInitialInfo' )
  var i587 = data
  i586.level = i587[0]
  i586.damage = i587[1]
  i586.maxDistance = i587[2]
  i586.fireRate = i587[3]
  request.r(i587[4], i587[5], 0, i586, 'bulletPrefab')
  request.r(i587[6], i587[7], 0, i586, 'Warrior')
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i591 = data
  i590.mass = i591[0]
  i590.drag = i591[1]
  i590.angularDrag = i591[2]
  i590.useGravity = !!i591[3]
  i590.isKinematic = !!i591[4]
  i590.constraints = i591[5]
  i590.maxAngularVelocity = i591[6]
  i590.collisionDetectionMode = i591[7]
  i590.interpolation = i591[8]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i593 = data
  i592.enabled = !!i593[0]
  i592.aspect = i593[1]
  i592.orthographic = !!i593[2]
  i592.orthographicSize = i593[3]
  i592.backgroundColor = new pc.Color(i593[4], i593[5], i593[6], i593[7])
  i592.nearClipPlane = i593[8]
  i592.farClipPlane = i593[9]
  i592.fieldOfView = i593[10]
  i592.depth = i593[11]
  i592.clearFlags = i593[12]
  i592.cullingMask = i593[13]
  i592.rect = i593[14]
  request.r(i593[15], i593[16], 0, i592, 'targetTexture')
  i592.usePhysicalProperties = !!i593[17]
  i592.focalLength = i593[18]
  i592.sensorSize = new pc.Vec2( i593[19], i593[20] )
  i592.lensShift = new pc.Vec2( i593[21], i593[22] )
  i592.gateFit = i593[23]
  i592.commandBufferCount = i593[24]
  i592.cameraType = i593[25]
  return i592
}

Deserializers["LGSDKCameraFollow"] = function (request, data, root) {
  var i594 = root || request.c( 'LGSDKCameraFollow' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'leaderCharacter')
  i594.offset = new pc.Vec3( i595[2], i595[3], i595[4] )
  i594.smoothSpeed = i595[5]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i597 = data
  i596.name = i597[0]
  i596.tagId = i597[1]
  i596.enabled = !!i597[2]
  i596.isStatic = !!i597[3]
  i596.layer = i597[4]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i599 = data
  i598.enabled = !!i599[0]
  i598.isTrigger = !!i599[1]
  request.r(i599[2], i599[3], 0, i598, 'material')
  i598.center = new pc.Vec3( i599[4], i599[5], i599[6] )
  i598.radius = i599[7]
  return i598
}

Deserializers["LGSDKBullet"] = function (request, data, root) {
  var i600 = root || request.c( 'LGSDKBullet' )
  var i601 = data
  i600.speed = i601[0]
  i600.maxDistance = i601[1]
  i600.damage = i601[2]
  i600.fireRate = i601[3]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i603 = data
  i602.playAutomatically = !!i603[0]
  request.r(i603[1], i603[2], 0, i602, 'clip')
  var i605 = i603[3]
  var i604 = []
  for(var i = 0; i < i605.length; i += 2) {
  request.r(i605[i + 0], i605[i + 1], 2, i604, '')
  }
  i602.clips = i604
  i602.wrapMode = i603[4]
  i602.enabled = !!i603[5]
  return i602
}

Deserializers["LGSDKFlowerCharacterController"] = function (request, data, root) {
  var i608 = root || request.c( 'LGSDKFlowerCharacterController' )
  var i609 = data
  var i611 = i609[0]
  var i610 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i611.length; i += 2) {
  request.r(i611[i + 0], i611[i + 1], 1, i610, '')
  }
  i608.bulletPrefabsByLevel = i610
  request.r(i609[1], i609[2], 0, i608, 'bulletPrefab')
  request.r(i609[3], i609[4], 0, i608, 'bulletSpawnPoint')
  i608.moveSpeed = i609[5]
  i608.level = i609[6]
  i608.damage = i609[7]
  i608.fireRate = i609[8]
  i608.maxDistance = i609[9]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i613 = data
  i612.center = new pc.Vec3( i613[0], i613[1], i613[2] )
  i612.size = new pc.Vec3( i613[3], i613[4], i613[5] )
  i612.enabled = !!i613[6]
  i612.isTrigger = !!i613[7]
  request.r(i613[8], i613[9], 0, i612, 'material')
  return i612
}

Deserializers["LGSDKLoot"] = function (request, data, root) {
  var i614 = root || request.c( 'LGSDKLoot' )
  var i615 = data
  var i617 = i615[0]
  var i616 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 1, i616, '')
  }
  i614.layers = i616
  request.r(i615[1], i615[2], 0, i614, 'damagePopupPrefab')
  request.r(i615[3], i615[4], 0, i614, 'hitPoint')
  i614.totalExperience = i615[5]
  i614.currentXP = i615[6]
  i614.timeBrickBreak = i615[7]
  return i614
}

Deserializers["LGSDKDamagePopup"] = function (request, data, root) {
  var i620 = root || request.c( 'LGSDKDamagePopup' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'text')
  i620.lifetime = i621[2]
  i620.floatSpeed = i621[3]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i623 = data
  i622.pivot = new pc.Vec2( i623[0], i623[1] )
  i622.anchorMin = new pc.Vec2( i623[2], i623[3] )
  i622.anchorMax = new pc.Vec2( i623[4], i623[5] )
  i622.sizeDelta = new pc.Vec2( i623[6], i623[7] )
  i622.anchoredPosition3D = new pc.Vec3( i623[8], i623[9], i623[10] )
  i622.rotation = new pc.Quat(i623[11], i623[12], i623[13], i623[14])
  i622.scale = new pc.Vec3( i623[15], i623[16], i623[17] )
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i625 = data
  i624.enabled = !!i625[0]
  i624.planeDistance = i625[1]
  i624.referencePixelsPerUnit = i625[2]
  i624.isFallbackOverlay = !!i625[3]
  i624.renderMode = i625[4]
  i624.renderOrder = i625[5]
  i624.sortingLayerName = i625[6]
  i624.sortingOrder = i625[7]
  i624.scaleFactor = i625[8]
  request.r(i625[9], i625[10], 0, i624, 'worldCamera')
  i624.overrideSorting = !!i625[11]
  i624.pixelPerfect = !!i625[12]
  i624.targetDisplay = i625[13]
  i624.overridePixelPerfect = !!i625[14]
  return i624
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i627 = data
  i626.m_UiScaleMode = i627[0]
  i626.m_ReferencePixelsPerUnit = i627[1]
  i626.m_ScaleFactor = i627[2]
  i626.m_ReferenceResolution = new pc.Vec2( i627[3], i627[4] )
  i626.m_ScreenMatchMode = i627[5]
  i626.m_MatchWidthOrHeight = i627[6]
  i626.m_PhysicalUnit = i627[7]
  i626.m_FallbackScreenDPI = i627[8]
  i626.m_DefaultSpriteDPI = i627[9]
  i626.m_DynamicPixelsPerUnit = i627[10]
  i626.m_PresetInfoIsWorld = !!i627[11]
  return i626
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i629 = data
  i628.m_IgnoreReversedGraphics = !!i629[0]
  i628.m_BlockingObjects = i629[1]
  i628.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i629[2] )
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i631 = data
  i630.cullTransparentMesh = !!i631[0]
  return i630
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i632 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i633 = data
  i632.m_hasFontAssetChanged = !!i633[0]
  request.r(i633[1], i633[2], 0, i632, 'm_baseMaterial')
  i632.m_maskOffset = new pc.Vec4( i633[3], i633[4], i633[5], i633[6] )
  i632.m_text = i633[7]
  i632.m_isRightToLeft = !!i633[8]
  request.r(i633[9], i633[10], 0, i632, 'm_fontAsset')
  request.r(i633[11], i633[12], 0, i632, 'm_sharedMaterial')
  var i635 = i633[13]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i632.m_fontSharedMaterials = i634
  request.r(i633[14], i633[15], 0, i632, 'm_fontMaterial')
  var i637 = i633[16]
  var i636 = []
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 2, i636, '')
  }
  i632.m_fontMaterials = i636
  i632.m_fontColor32 = UnityEngine.Color32.ConstructColor(i633[17], i633[18], i633[19], i633[20])
  i632.m_fontColor = new pc.Color(i633[21], i633[22], i633[23], i633[24])
  i632.m_enableVertexGradient = !!i633[25]
  i632.m_colorMode = i633[26]
  i632.m_fontColorGradient = request.d('TMPro.VertexGradient', i633[27], i632.m_fontColorGradient)
  request.r(i633[28], i633[29], 0, i632, 'm_fontColorGradientPreset')
  request.r(i633[30], i633[31], 0, i632, 'm_spriteAsset')
  i632.m_tintAllSprites = !!i633[32]
  request.r(i633[33], i633[34], 0, i632, 'm_StyleSheet')
  i632.m_TextStyleHashCode = i633[35]
  i632.m_overrideHtmlColors = !!i633[36]
  i632.m_faceColor = UnityEngine.Color32.ConstructColor(i633[37], i633[38], i633[39], i633[40])
  i632.m_fontSize = i633[41]
  i632.m_fontSizeBase = i633[42]
  i632.m_fontWeight = i633[43]
  i632.m_enableAutoSizing = !!i633[44]
  i632.m_fontSizeMin = i633[45]
  i632.m_fontSizeMax = i633[46]
  i632.m_fontStyle = i633[47]
  i632.m_HorizontalAlignment = i633[48]
  i632.m_VerticalAlignment = i633[49]
  i632.m_textAlignment = i633[50]
  i632.m_characterSpacing = i633[51]
  i632.m_wordSpacing = i633[52]
  i632.m_lineSpacing = i633[53]
  i632.m_lineSpacingMax = i633[54]
  i632.m_paragraphSpacing = i633[55]
  i632.m_charWidthMaxAdj = i633[56]
  i632.m_enableWordWrapping = !!i633[57]
  i632.m_wordWrappingRatios = i633[58]
  i632.m_overflowMode = i633[59]
  request.r(i633[60], i633[61], 0, i632, 'm_linkedTextComponent')
  request.r(i633[62], i633[63], 0, i632, 'parentLinkedComponent')
  i632.m_enableKerning = !!i633[64]
  i632.m_enableExtraPadding = !!i633[65]
  i632.checkPaddingRequired = !!i633[66]
  i632.m_isRichText = !!i633[67]
  i632.m_parseCtrlCharacters = !!i633[68]
  i632.m_isOrthographic = !!i633[69]
  i632.m_isCullingEnabled = !!i633[70]
  i632.m_horizontalMapping = i633[71]
  i632.m_verticalMapping = i633[72]
  i632.m_uvLineOffset = i633[73]
  i632.m_geometrySortingOrder = i633[74]
  i632.m_IsTextObjectScaleStatic = !!i633[75]
  i632.m_VertexBufferAutoSizeReduction = !!i633[76]
  i632.m_useMaxVisibleDescender = !!i633[77]
  i632.m_pageToDisplay = i633[78]
  i632.m_margin = new pc.Vec4( i633[79], i633[80], i633[81], i633[82] )
  i632.m_isUsingLegacyAnimationComponent = !!i633[83]
  i632.m_isVolumetricText = !!i633[84]
  request.r(i633[85], i633[86], 0, i632, 'm_Material')
  i632.m_Maskable = !!i633[87]
  i632.m_Color = new pc.Color(i633[88], i633[89], i633[90], i633[91])
  i632.m_RaycastTarget = !!i633[92]
  i632.m_RaycastPadding = new pc.Vec4( i633[93], i633[94], i633[95], i633[96] )
  return i632
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i638 = root || request.c( 'TMPro.VertexGradient' )
  var i639 = data
  i638.topLeft = new pc.Color(i639[0], i639[1], i639[2], i639[3])
  i638.topRight = new pc.Color(i639[4], i639[5], i639[6], i639[7])
  i638.bottomLeft = new pc.Color(i639[8], i639[9], i639[10], i639[11])
  i638.bottomRight = new pc.Color(i639[12], i639[13], i639[14], i639[15])
  return i638
}

Deserializers["LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample"] = function (request, data, root) {
  var i640 = root || request.c( 'LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample' )
  var i641 = data
  return i640
}

Deserializers["LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior"] = function (request, data, root) {
  var i642 = root || request.c( 'LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'pointA')
  request.r(i643[2], i643[3], 0, i642, 'pointB')
  i642.speed = i643[4]
  i642.waitTime = i643[5]
  i642.fireRate = i643[6]
  request.r(i643[7], i643[8], 0, i642, 'fireRateText')
  request.r(i643[9], i643[10], 0, i642, 'healthSlider')
  i642.maxHealth = i643[11]
  i642.currentHealth = i643[12]
  return i642
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i644 = root || request.c( 'TMPro.TextMeshPro' )
  var i645 = data
  i644._SortingLayer = i645[0]
  i644._SortingLayerID = i645[1]
  i644._SortingOrder = i645[2]
  i644.m_hasFontAssetChanged = !!i645[3]
  request.r(i645[4], i645[5], 0, i644, 'm_renderer')
  i644.m_maskType = i645[6]
  i644.m_text = i645[7]
  i644.m_isRightToLeft = !!i645[8]
  request.r(i645[9], i645[10], 0, i644, 'm_fontAsset')
  request.r(i645[11], i645[12], 0, i644, 'm_sharedMaterial')
  var i647 = i645[13]
  var i646 = []
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 2, i646, '')
  }
  i644.m_fontSharedMaterials = i646
  request.r(i645[14], i645[15], 0, i644, 'm_fontMaterial')
  var i649 = i645[16]
  var i648 = []
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 2, i648, '')
  }
  i644.m_fontMaterials = i648
  i644.m_fontColor32 = UnityEngine.Color32.ConstructColor(i645[17], i645[18], i645[19], i645[20])
  i644.m_fontColor = new pc.Color(i645[21], i645[22], i645[23], i645[24])
  i644.m_enableVertexGradient = !!i645[25]
  i644.m_colorMode = i645[26]
  i644.m_fontColorGradient = request.d('TMPro.VertexGradient', i645[27], i644.m_fontColorGradient)
  request.r(i645[28], i645[29], 0, i644, 'm_fontColorGradientPreset')
  request.r(i645[30], i645[31], 0, i644, 'm_spriteAsset')
  i644.m_tintAllSprites = !!i645[32]
  request.r(i645[33], i645[34], 0, i644, 'm_StyleSheet')
  i644.m_TextStyleHashCode = i645[35]
  i644.m_overrideHtmlColors = !!i645[36]
  i644.m_faceColor = UnityEngine.Color32.ConstructColor(i645[37], i645[38], i645[39], i645[40])
  i644.m_fontSize = i645[41]
  i644.m_fontSizeBase = i645[42]
  i644.m_fontWeight = i645[43]
  i644.m_enableAutoSizing = !!i645[44]
  i644.m_fontSizeMin = i645[45]
  i644.m_fontSizeMax = i645[46]
  i644.m_fontStyle = i645[47]
  i644.m_HorizontalAlignment = i645[48]
  i644.m_VerticalAlignment = i645[49]
  i644.m_textAlignment = i645[50]
  i644.m_characterSpacing = i645[51]
  i644.m_wordSpacing = i645[52]
  i644.m_lineSpacing = i645[53]
  i644.m_lineSpacingMax = i645[54]
  i644.m_paragraphSpacing = i645[55]
  i644.m_charWidthMaxAdj = i645[56]
  i644.m_enableWordWrapping = !!i645[57]
  i644.m_wordWrappingRatios = i645[58]
  i644.m_overflowMode = i645[59]
  request.r(i645[60], i645[61], 0, i644, 'm_linkedTextComponent')
  request.r(i645[62], i645[63], 0, i644, 'parentLinkedComponent')
  i644.m_enableKerning = !!i645[64]
  i644.m_enableExtraPadding = !!i645[65]
  i644.checkPaddingRequired = !!i645[66]
  i644.m_isRichText = !!i645[67]
  i644.m_parseCtrlCharacters = !!i645[68]
  i644.m_isOrthographic = !!i645[69]
  i644.m_isCullingEnabled = !!i645[70]
  i644.m_horizontalMapping = i645[71]
  i644.m_verticalMapping = i645[72]
  i644.m_uvLineOffset = i645[73]
  i644.m_geometrySortingOrder = i645[74]
  i644.m_IsTextObjectScaleStatic = !!i645[75]
  i644.m_VertexBufferAutoSizeReduction = !!i645[76]
  i644.m_useMaxVisibleDescender = !!i645[77]
  i644.m_pageToDisplay = i645[78]
  i644.m_margin = new pc.Vec4( i645[79], i645[80], i645[81], i645[82] )
  i644.m_isUsingLegacyAnimationComponent = !!i645[83]
  i644.m_isVolumetricText = !!i645[84]
  request.r(i645[85], i645[86], 0, i644, 'm_Material')
  i644.m_Maskable = !!i645[87]
  i644.m_Color = new pc.Color(i645[88], i645[89], i645[90], i645[91])
  i644.m_RaycastTarget = !!i645[92]
  i644.m_RaycastPadding = new pc.Vec4( i645[93], i645[94], i645[95], i645[96] )
  return i644
}

Deserializers["LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel"] = function (request, data, root) {
  var i650 = root || request.c( 'LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel' )
  var i651 = data
  i650.goldReward = i651[0]
  request.r(i651[1], i651[2], 0, i650, 'numberTMPro')
  i650.health = i651[3]
  return i650
}

Deserializers["LGSDK.TimelineUp.Obstacles.LGSDKObstacleIdleBehavior"] = function (request, data, root) {
  var i652 = root || request.c( 'LGSDK.TimelineUp.Obstacles.LGSDKObstacleIdleBehavior' )
  var i653 = data
  return i652
}

Deserializers["LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw"] = function (request, data, root) {
  var i654 = root || request.c( 'LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw' )
  var i655 = data
  i654.damage = i655[0]
  i654.health = i655[1]
  return i654
}

Deserializers["LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior"] = function (request, data, root) {
  var i656 = root || request.c( 'LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'groove')
  i656.speed = i657[2]
  i656.waitTime = i657[3]
  return i656
}

Deserializers["LGSDK.TimelineUp.Obstacles.LGSDKObstacleRotatorBehavior"] = function (request, data, root) {
  var i658 = root || request.c( 'LGSDK.TimelineUp.Obstacles.LGSDKObstacleRotatorBehavior' )
  var i659 = data
  i658.rotationSpeed = i659[0]
  return i658
}

Deserializers["LGSDKEnemyShooter"] = function (request, data, root) {
  var i660 = root || request.c( 'LGSDKEnemyShooter' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'bulletPrefab')
  request.r(i661[2], i661[3], 0, i660, 'firePoint')
  i660.bulletSpeed = i661[4]
  i660.maxDistance = i661[5]
  i660.fireRate = i661[6]
  return i660
}

Deserializers["LGSDKEnemyController"] = function (request, data, root) {
  var i662 = root || request.c( 'LGSDKEnemyController' )
  var i663 = data
  i662.maxHealth = i663[0]
  request.r(i663[1], i663[2], 0, i662, 'healthBarImage')
  return i662
}

Deserializers["LGSDKHealthBarFollow"] = function (request, data, root) {
  var i664 = root || request.c( 'LGSDKHealthBarFollow' )
  var i665 = data
  return i664
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.Slider' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'm_FillRect')
  request.r(i667[2], i667[3], 0, i666, 'm_HandleRect')
  i666.m_Direction = i667[4]
  i666.m_MinValue = i667[5]
  i666.m_MaxValue = i667[6]
  i666.m_WholeNumbers = !!i667[7]
  i666.m_Value = i667[8]
  i666.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i667[9], i666.m_OnValueChanged)
  i666.m_Navigation = request.d('UnityEngine.UI.Navigation', i667[10], i666.m_Navigation)
  i666.m_Transition = i667[11]
  i666.m_Colors = request.d('UnityEngine.UI.ColorBlock', i667[12], i666.m_Colors)
  i666.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i667[13], i666.m_SpriteState)
  i666.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i667[14], i666.m_AnimationTriggers)
  i666.m_Interactable = !!i667[15]
  request.r(i667[16], i667[17], 0, i666, 'm_TargetGraphic')
  return i666
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i669 = data
  i668.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i669[0], i668.m_PersistentCalls)
  return i668
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i671 = data
  var i673 = i671[0]
  var i672 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i673.length; i += 1) {
    i672.add(request.d('UnityEngine.Events.PersistentCall', i673[i + 0]));
  }
  i670.m_Calls = i672
  return i670
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'm_Target')
  i676.m_TargetAssemblyTypeName = i677[2]
  i676.m_MethodName = i677[3]
  i676.m_Mode = i677[4]
  i676.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i677[5], i676.m_Arguments)
  i676.m_CallState = i677[6]
  return i676
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i679 = data
  i678.m_Mode = i679[0]
  i678.m_WrapAround = !!i679[1]
  request.r(i679[2], i679[3], 0, i678, 'm_SelectOnUp')
  request.r(i679[4], i679[5], 0, i678, 'm_SelectOnDown')
  request.r(i679[6], i679[7], 0, i678, 'm_SelectOnLeft')
  request.r(i679[8], i679[9], 0, i678, 'm_SelectOnRight')
  return i678
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i681 = data
  i680.m_NormalColor = new pc.Color(i681[0], i681[1], i681[2], i681[3])
  i680.m_HighlightedColor = new pc.Color(i681[4], i681[5], i681[6], i681[7])
  i680.m_PressedColor = new pc.Color(i681[8], i681[9], i681[10], i681[11])
  i680.m_SelectedColor = new pc.Color(i681[12], i681[13], i681[14], i681[15])
  i680.m_DisabledColor = new pc.Color(i681[16], i681[17], i681[18], i681[19])
  i680.m_ColorMultiplier = i681[20]
  i680.m_FadeDuration = i681[21]
  return i680
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'm_HighlightedSprite')
  request.r(i683[2], i683[3], 0, i682, 'm_PressedSprite')
  request.r(i683[4], i683[5], 0, i682, 'm_SelectedSprite')
  request.r(i683[6], i683[7], 0, i682, 'm_DisabledSprite')
  return i682
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i685 = data
  i684.m_NormalTrigger = i685[0]
  i684.m_HighlightedTrigger = i685[1]
  i684.m_PressedTrigger = i685[2]
  i684.m_SelectedTrigger = i685[3]
  i684.m_DisabledTrigger = i685[4]
  return i684
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.Image' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'm_Sprite')
  i686.m_Type = i687[2]
  i686.m_PreserveAspect = !!i687[3]
  i686.m_FillCenter = !!i687[4]
  i686.m_FillMethod = i687[5]
  i686.m_FillAmount = i687[6]
  i686.m_FillClockwise = !!i687[7]
  i686.m_FillOrigin = i687[8]
  i686.m_UseSpriteMesh = !!i687[9]
  i686.m_PixelsPerUnitMultiplier = i687[10]
  request.r(i687[11], i687[12], 0, i686, 'm_Material')
  i686.m_Maskable = !!i687[13]
  i686.m_Color = new pc.Color(i687[14], i687[15], i687[16], i687[17])
  i686.m_RaycastTarget = !!i687[18]
  i686.m_RaycastPadding = new pc.Vec4( i687[19], i687[20], i687[21], i687[22] )
  return i686
}

Deserializers["LGSDKEnemyBullet"] = function (request, data, root) {
  var i688 = root || request.c( 'LGSDKEnemyBullet' )
  var i689 = data
  i688.startPos = new pc.Vec3( i689[0], i689[1], i689[2] )
  i688.maxDistance = i689[3]
  i688.speed = i689[4]
  return i688
}

Deserializers["LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior"] = function (request, data, root) {
  var i690 = root || request.c( 'LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'pointA')
  request.r(i691[2], i691[3], 0, i690, 'pointB')
  i690.speed = i691[4]
  i690.waitTime = i691[5]
  i690.atkRange = i691[6]
  request.r(i691[7], i691[8], 0, i690, 'atkRangeText')
  request.r(i691[9], i691[10], 0, i690, 'healthSlider')
  i690.maxHealth = i691[11]
  i690.currentHealth = i691[12]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i693 = data
  i692.name = i693[0]
  i692.atlasId = i693[1]
  i692.mipmapCount = i693[2]
  i692.hdr = !!i693[3]
  i692.size = i693[4]
  i692.anisoLevel = i693[5]
  i692.filterMode = i693[6]
  var i695 = i693[7]
  var i694 = []
  for(var i = 0; i < i695.length; i += 4) {
    i694.push( UnityEngine.Rect.MinMaxRect(i695[i + 0], i695[i + 1], i695[i + 2], i695[i + 3]) );
  }
  i692.rects = i694
  i692.wrapU = i693[8]
  i692.wrapV = i693[9]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i699 = data
  i698.name = i699[0]
  i698.index = i699[1]
  i698.startup = !!i699[2]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i701 = data
  i700.enabled = !!i701[0]
  i700.type = i701[1]
  i700.color = new pc.Color(i701[2], i701[3], i701[4], i701[5])
  i700.cullingMask = i701[6]
  i700.intensity = i701[7]
  i700.range = i701[8]
  i700.spotAngle = i701[9]
  i700.shadows = i701[10]
  i700.shadowNormalBias = i701[11]
  i700.shadowBias = i701[12]
  i700.shadowStrength = i701[13]
  i700.shadowResolution = i701[14]
  i700.lightmapBakeType = i701[15]
  i700.renderMode = i701[16]
  request.r(i701[17], i701[18], 0, i700, 'cookie')
  i700.cookieSize = i701[19]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i703 = data
  i702.enabled = !!i703[0]
  i702.isTrigger = !!i703[1]
  request.r(i703[2], i703[3], 0, i702, 'material')
  request.r(i703[4], i703[5], 0, i702, 'sharedMesh')
  i702.convex = !!i703[6]
  return i702
}

Deserializers["TMPForceLoader"] = function (request, data, root) {
  var i704 = root || request.c( 'TMPForceLoader' )
  var i705 = data
  return i704
}

Deserializers["BoxHealth"] = function (request, data, root) {
  var i706 = root || request.c( 'BoxHealth' )
  var i707 = data
  i706.health = i707[0]
  request.r(i707[1], i707[2], 0, i706, 'textMesh')
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i709 = data
  i708.ambientIntensity = i709[0]
  i708.reflectionIntensity = i709[1]
  i708.ambientMode = i709[2]
  i708.ambientLight = new pc.Color(i709[3], i709[4], i709[5], i709[6])
  i708.ambientSkyColor = new pc.Color(i709[7], i709[8], i709[9], i709[10])
  i708.ambientGroundColor = new pc.Color(i709[11], i709[12], i709[13], i709[14])
  i708.ambientEquatorColor = new pc.Color(i709[15], i709[16], i709[17], i709[18])
  i708.fogColor = new pc.Color(i709[19], i709[20], i709[21], i709[22])
  i708.fogEndDistance = i709[23]
  i708.fogStartDistance = i709[24]
  i708.fogDensity = i709[25]
  i708.fog = !!i709[26]
  request.r(i709[27], i709[28], 0, i708, 'skybox')
  i708.fogMode = i709[29]
  var i711 = i709[30]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i711[i + 0]) );
  }
  i708.lightmaps = i710
  i708.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i709[31], i708.lightProbes)
  i708.lightmapsMode = i709[32]
  i708.mixedBakeMode = i709[33]
  i708.environmentLightingMode = i709[34]
  i708.ambientProbe = new pc.SphericalHarmonicsL2(i709[35])
  i708.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i709[36])
  i708.useReferenceAmbientProbe = !!i709[37]
  request.r(i709[38], i709[39], 0, i708, 'customReflection')
  request.r(i709[40], i709[41], 0, i708, 'defaultReflection')
  i708.defaultReflectionMode = i709[42]
  i708.defaultReflectionResolution = i709[43]
  i708.sunLightObjectId = i709[44]
  i708.pixelLightCount = i709[45]
  i708.defaultReflectionHDR = !!i709[46]
  i708.hasLightDataAsset = !!i709[47]
  i708.hasManualGenerate = !!i709[48]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'lightmapColor')
  request.r(i715[2], i715[3], 0, i714, 'lightmapDirection')
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i716 = root || new UnityEngine.LightProbes()
  var i717 = data
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i725 = data
  var i727 = i725[0]
  var i726 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i727.length; i += 1) {
    i726.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i727[i + 0]));
  }
  i724.ShaderCompilationErrors = i726
  i724.name = i725[1]
  i724.guid = i725[2]
  var i729 = i725[3]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( i729[i + 0] );
  }
  i724.shaderDefinedKeywords = i728
  var i731 = i725[4]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i731[i + 0]) );
  }
  i724.passes = i730
  var i733 = i725[5]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i733[i + 0]) );
  }
  i724.usePasses = i732
  var i735 = i725[6]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i735[i + 0]) );
  }
  i724.defaultParameterValues = i734
  request.r(i725[7], i725[8], 0, i724, 'unityFallbackShader')
  i724.readDepth = !!i725[9]
  i724.isCreatedByShaderGraph = !!i725[10]
  i724.compiled = !!i725[11]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i739 = data
  i738.shaderName = i739[0]
  i738.errorMessage = i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i744 = root || new pc.UnityShaderPass()
  var i745 = data
  i744.id = i745[0]
  i744.subShaderIndex = i745[1]
  i744.name = i745[2]
  i744.passType = i745[3]
  i744.grabPassTextureName = i745[4]
  i744.usePass = !!i745[5]
  i744.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[6], i744.zTest)
  i744.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[7], i744.zWrite)
  i744.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[8], i744.culling)
  i744.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i745[9], i744.blending)
  i744.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i745[10], i744.alphaBlending)
  i744.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[11], i744.colorWriteMask)
  i744.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[12], i744.offsetUnits)
  i744.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[13], i744.offsetFactor)
  i744.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[14], i744.stencilRef)
  i744.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[15], i744.stencilReadMask)
  i744.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[16], i744.stencilWriteMask)
  i744.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i745[17], i744.stencilOp)
  i744.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i745[18], i744.stencilOpFront)
  i744.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i745[19], i744.stencilOpBack)
  var i747 = i745[20]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i747[i + 0]) );
  }
  i744.tags = i746
  var i749 = i745[21]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( i749[i + 0] );
  }
  i744.passDefinedKeywords = i748
  var i751 = i745[22]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i751[i + 0]) );
  }
  i744.passDefinedKeywordGroups = i750
  var i753 = i745[23]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i753[i + 0]) );
  }
  i744.variants = i752
  var i755 = i745[24]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i755[i + 0]) );
  }
  i744.excludedVariants = i754
  i744.hasDepthReader = !!i745[25]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i757 = data
  i756.val = i757[0]
  i756.name = i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i759 = data
  i758.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[0], i758.src)
  i758.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[1], i758.dst)
  i758.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i759[2], i758.op)
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i761 = data
  i760.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[0], i760.pass)
  i760.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[1], i760.fail)
  i760.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[2], i760.zFail)
  i760.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[3], i760.comp)
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i765 = data
  i764.name = i765[0]
  i764.value = i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i769 = data
  var i771 = i769[0]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( i771[i + 0] );
  }
  i768.keywords = i770
  i768.hasDiscard = !!i769[1]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i775 = data
  i774.passId = i775[0]
  i774.subShaderIndex = i775[1]
  var i777 = i775[2]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i774.keywords = i776
  i774.vertexProgram = i775[3]
  i774.fragmentProgram = i775[4]
  i774.exportedForWebGl2 = !!i775[5]
  i774.readDepth = !!i775[6]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'shader')
  i780.pass = i781[2]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i785 = data
  i784.name = i785[0]
  i784.type = i785[1]
  i784.value = new pc.Vec4( i785[2], i785[3], i785[4], i785[5] )
  i784.textureValue = i785[6]
  i784.shaderPropertyFlag = i785[7]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i787 = data
  i786.name = i787[0]
  request.r(i787[1], i787[2], 0, i786, 'texture')
  i786.aabb = i787[3]
  i786.vertices = i787[4]
  i786.triangles = i787[5]
  i786.textureRect = UnityEngine.Rect.MinMaxRect(i787[6], i787[7], i787[8], i787[9])
  i786.packedRect = UnityEngine.Rect.MinMaxRect(i787[10], i787[11], i787[12], i787[13])
  i786.border = new pc.Vec4( i787[14], i787[15], i787[16], i787[17] )
  i786.transparency = i787[18]
  i786.bounds = i787[19]
  i786.pixelsPerUnit = i787[20]
  i786.textureWidth = i787[21]
  i786.textureHeight = i787[22]
  i786.nativeSize = new pc.Vec2( i787[23], i787[24] )
  i786.pivot = new pc.Vec2( i787[25], i787[26] )
  i786.textureRectOffset = new pc.Vec2( i787[27], i787[28] )
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i789 = data
  i788.name = i789[0]
  i788.ascent = i789[1]
  i788.originalLineHeight = i789[2]
  i788.fontSize = i789[3]
  var i791 = i789[4]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i791[i + 0]) );
  }
  i788.characterInfo = i790
  request.r(i789[5], i789[6], 0, i788, 'texture')
  i788.originalFontSize = i789[7]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i795 = data
  i794.index = i795[0]
  i794.advance = i795[1]
  i794.bearing = i795[2]
  i794.glyphWidth = i795[3]
  i794.glyphHeight = i795[4]
  i794.minX = i795[5]
  i794.maxX = i795[6]
  i794.minY = i795[7]
  i794.maxY = i795[8]
  i794.uvBottomLeftX = i795[9]
  i794.uvBottomLeftY = i795[10]
  i794.uvBottomRightX = i795[11]
  i794.uvBottomRightY = i795[12]
  i794.uvTopLeftX = i795[13]
  i794.uvTopLeftY = i795[14]
  i794.uvTopRightX = i795[15]
  i794.uvTopRightY = i795[16]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i797 = data
  i796.name = i797[0]
  i796.bytes64 = i797[1]
  i796.data = i797[2]
  return i796
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i798 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i799 = data
  i798.hashCode = i799[0]
  request.r(i799[1], i799[2], 0, i798, 'material')
  i798.materialHashCode = i799[3]
  request.r(i799[4], i799[5], 0, i798, 'atlas')
  i798.normalStyle = i799[6]
  i798.normalSpacingOffset = i799[7]
  i798.boldStyle = i799[8]
  i798.boldSpacing = i799[9]
  i798.italicStyle = i799[10]
  i798.tabSize = i799[11]
  i798.m_Version = i799[12]
  i798.m_SourceFontFileGUID = i799[13]
  request.r(i799[14], i799[15], 0, i798, 'm_SourceFontFile_EditorRef')
  request.r(i799[16], i799[17], 0, i798, 'm_SourceFontFile')
  i798.m_AtlasPopulationMode = i799[18]
  i798.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i799[19], i798.m_FaceInfo)
  var i801 = i799[20]
  var i800 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i801.length; i += 1) {
    i800.add(request.d('UnityEngine.TextCore.Glyph', i801[i + 0]));
  }
  i798.m_GlyphTable = i800
  var i803 = i799[21]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(request.d('TMPro.TMP_Character', i803[i + 0]));
  }
  i798.m_CharacterTable = i802
  var i805 = i799[22]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i798.m_AtlasTextures = i804
  i798.m_AtlasTextureIndex = i799[23]
  i798.m_IsMultiAtlasTexturesEnabled = !!i799[24]
  i798.m_ClearDynamicDataOnBuild = !!i799[25]
  var i807 = i799[26]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i807.length; i += 1) {
    i806.add(request.d('UnityEngine.TextCore.GlyphRect', i807[i + 0]));
  }
  i798.m_UsedGlyphRects = i806
  var i809 = i799[27]
  var i808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i809.length; i += 1) {
    i808.add(request.d('UnityEngine.TextCore.GlyphRect', i809[i + 0]));
  }
  i798.m_FreeGlyphRects = i808
  i798.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i799[28], i798.m_fontInfo)
  i798.m_AtlasWidth = i799[29]
  i798.m_AtlasHeight = i799[30]
  i798.m_AtlasPadding = i799[31]
  i798.m_AtlasRenderMode = i799[32]
  var i811 = i799[33]
  var i810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i811.length; i += 1) {
    i810.add(request.d('TMPro.TMP_Glyph', i811[i + 0]));
  }
  i798.m_glyphInfoList = i810
  i798.m_KerningTable = request.d('TMPro.KerningTable', i799[34], i798.m_KerningTable)
  i798.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i799[35], i798.m_FontFeatureTable)
  var i813 = i799[36]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 1, i812, '')
  }
  i798.fallbackFontAssets = i812
  var i815 = i799[37]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 1, i814, '')
  }
  i798.m_FallbackFontAssetTable = i814
  i798.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i799[38], i798.m_CreationSettings)
  var i817 = i799[39]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('TMPro.TMP_FontWeightPair', i817[i + 0]) );
  }
  i798.m_FontWeightTable = i816
  var i819 = i799[40]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('TMPro.TMP_FontWeightPair', i819[i + 0]) );
  }
  i798.fontWeights = i818
  return i798
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i821 = data
  i820.m_FaceIndex = i821[0]
  i820.m_FamilyName = i821[1]
  i820.m_StyleName = i821[2]
  i820.m_PointSize = i821[3]
  i820.m_Scale = i821[4]
  i820.m_UnitsPerEM = i821[5]
  i820.m_LineHeight = i821[6]
  i820.m_AscentLine = i821[7]
  i820.m_CapLine = i821[8]
  i820.m_MeanLine = i821[9]
  i820.m_Baseline = i821[10]
  i820.m_DescentLine = i821[11]
  i820.m_SuperscriptOffset = i821[12]
  i820.m_SuperscriptSize = i821[13]
  i820.m_SubscriptOffset = i821[14]
  i820.m_SubscriptSize = i821[15]
  i820.m_UnderlineOffset = i821[16]
  i820.m_UnderlineThickness = i821[17]
  i820.m_StrikethroughOffset = i821[18]
  i820.m_StrikethroughThickness = i821[19]
  i820.m_TabWidth = i821[20]
  return i820
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i825 = data
  i824.m_Index = i825[0]
  i824.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i825[1], i824.m_Metrics)
  i824.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i825[2], i824.m_GlyphRect)
  i824.m_Scale = i825[3]
  i824.m_AtlasIndex = i825[4]
  i824.m_ClassDefinitionType = i825[5]
  return i824
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i827 = data
  i826.m_Width = i827[0]
  i826.m_Height = i827[1]
  i826.m_HorizontalBearingX = i827[2]
  i826.m_HorizontalBearingY = i827[3]
  i826.m_HorizontalAdvance = i827[4]
  return i826
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i829 = data
  i828.m_X = i829[0]
  i828.m_Y = i829[1]
  i828.m_Width = i829[2]
  i828.m_Height = i829[3]
  return i828
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i832 = root || request.c( 'TMPro.TMP_Character' )
  var i833 = data
  i832.m_ElementType = i833[0]
  i832.m_Unicode = i833[1]
  i832.m_GlyphIndex = i833[2]
  i832.m_Scale = i833[3]
  return i832
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i838 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i839 = data
  i838.Name = i839[0]
  i838.PointSize = i839[1]
  i838.Scale = i839[2]
  i838.CharacterCount = i839[3]
  i838.LineHeight = i839[4]
  i838.Baseline = i839[5]
  i838.Ascender = i839[6]
  i838.CapHeight = i839[7]
  i838.Descender = i839[8]
  i838.CenterLine = i839[9]
  i838.SuperscriptOffset = i839[10]
  i838.SubscriptOffset = i839[11]
  i838.SubSize = i839[12]
  i838.Underline = i839[13]
  i838.UnderlineThickness = i839[14]
  i838.strikethrough = i839[15]
  i838.strikethroughThickness = i839[16]
  i838.TabWidth = i839[17]
  i838.Padding = i839[18]
  i838.AtlasWidth = i839[19]
  i838.AtlasHeight = i839[20]
  return i838
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i842 = root || request.c( 'TMPro.TMP_Glyph' )
  var i843 = data
  i842.id = i843[0]
  i842.x = i843[1]
  i842.y = i843[2]
  i842.width = i843[3]
  i842.height = i843[4]
  i842.xOffset = i843[5]
  i842.yOffset = i843[6]
  i842.xAdvance = i843[7]
  i842.scale = i843[8]
  return i842
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.KerningTable' )
  var i845 = data
  var i847 = i845[0]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i847.length; i += 1) {
    i846.add(request.d('TMPro.KerningPair', i847[i + 0]));
  }
  i844.kerningPairs = i846
  return i844
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i850 = root || request.c( 'TMPro.KerningPair' )
  var i851 = data
  i850.xOffset = i851[0]
  i850.m_FirstGlyph = i851[1]
  i850.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i851[2], i850.m_FirstGlyphAdjustments)
  i850.m_SecondGlyph = i851[3]
  i850.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i851[4], i850.m_SecondGlyphAdjustments)
  i850.m_IgnoreSpacingAdjustments = !!i851[5]
  return i850
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i852 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i853 = data
  var i855 = i853[0]
  var i854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i855.length; i += 1) {
    i854.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i855[i + 0]));
  }
  i852.m_GlyphPairAdjustmentRecords = i854
  return i852
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i858 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i859 = data
  i858.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i859[0], i858.m_FirstAdjustmentRecord)
  i858.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i859[1], i858.m_SecondAdjustmentRecord)
  i858.m_FeatureLookupFlags = i859[2]
  return i858
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i860 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i861 = data
  i860.m_GlyphIndex = i861[0]
  i860.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i861[1], i860.m_GlyphValueRecord)
  return i860
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i863 = data
  i862.m_XPlacement = i863[0]
  i862.m_YPlacement = i863[1]
  i862.m_XAdvance = i863[2]
  i862.m_YAdvance = i863[3]
  return i862
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i866 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i867 = data
  i866.sourceFontFileName = i867[0]
  i866.sourceFontFileGUID = i867[1]
  i866.pointSizeSamplingMode = i867[2]
  i866.pointSize = i867[3]
  i866.padding = i867[4]
  i866.packingMode = i867[5]
  i866.atlasWidth = i867[6]
  i866.atlasHeight = i867[7]
  i866.characterSetSelectionMode = i867[8]
  i866.characterSequence = i867[9]
  i866.referencedFontAssetGUID = i867[10]
  i866.referencedTextAssetGUID = i867[11]
  i866.fontStyle = i867[12]
  i866.fontStyleModifier = i867[13]
  i866.renderMode = i867[14]
  i866.includeFontFeatures = !!i867[15]
  return i866
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i870 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'regularTypeface')
  request.r(i871[2], i871[3], 0, i870, 'italicTypeface')
  return i870
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i872 = root || request.c( 'TMPro.TMP_Settings' )
  var i873 = data
  i872.m_enableWordWrapping = !!i873[0]
  i872.m_enableKerning = !!i873[1]
  i872.m_enableExtraPadding = !!i873[2]
  i872.m_enableTintAllSprites = !!i873[3]
  i872.m_enableParseEscapeCharacters = !!i873[4]
  i872.m_EnableRaycastTarget = !!i873[5]
  i872.m_GetFontFeaturesAtRuntime = !!i873[6]
  i872.m_missingGlyphCharacter = i873[7]
  i872.m_warningsDisabled = !!i873[8]
  request.r(i873[9], i873[10], 0, i872, 'm_defaultFontAsset')
  i872.m_defaultFontAssetPath = i873[11]
  i872.m_defaultFontSize = i873[12]
  i872.m_defaultAutoSizeMinRatio = i873[13]
  i872.m_defaultAutoSizeMaxRatio = i873[14]
  i872.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i873[15], i873[16] )
  i872.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i873[17], i873[18] )
  i872.m_autoSizeTextContainer = !!i873[19]
  i872.m_IsTextObjectScaleStatic = !!i873[20]
  var i875 = i873[21]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 1, i874, '')
  }
  i872.m_fallbackFontAssets = i874
  i872.m_matchMaterialPreset = !!i873[22]
  request.r(i873[23], i873[24], 0, i872, 'm_defaultSpriteAsset')
  i872.m_defaultSpriteAssetPath = i873[25]
  i872.m_enableEmojiSupport = !!i873[26]
  i872.m_MissingCharacterSpriteUnicode = i873[27]
  i872.m_defaultColorGradientPresetsPath = i873[28]
  request.r(i873[29], i873[30], 0, i872, 'm_defaultStyleSheet')
  i872.m_StyleSheetsResourcePath = i873[31]
  request.r(i873[32], i873[33], 0, i872, 'm_leadingCharacters')
  request.r(i873[34], i873[35], 0, i872, 'm_followingCharacters')
  i872.m_UseModernHangulLineBreakingRules = !!i873[36]
  return i872
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i877 = data
  i876.hashCode = i877[0]
  request.r(i877[1], i877[2], 0, i876, 'material')
  i876.materialHashCode = i877[3]
  request.r(i877[4], i877[5], 0, i876, 'spriteSheet')
  var i879 = i877[6]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i879.length; i += 1) {
    i878.add(request.d('TMPro.TMP_Sprite', i879[i + 0]));
  }
  i876.spriteInfoList = i878
  var i881 = i877[7]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 1, i880, '')
  }
  i876.fallbackSpriteAssets = i880
  i876.m_Version = i877[8]
  i876.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i877[9], i876.m_FaceInfo)
  var i883 = i877[10]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('TMPro.TMP_SpriteCharacter', i883[i + 0]));
  }
  i876.m_SpriteCharacterTable = i882
  var i885 = i877[11]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('TMPro.TMP_SpriteGlyph', i885[i + 0]));
  }
  i876.m_SpriteGlyphTable = i884
  return i876
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i888 = root || request.c( 'TMPro.TMP_Sprite' )
  var i889 = data
  i888.name = i889[0]
  i888.hashCode = i889[1]
  i888.unicode = i889[2]
  i888.pivot = new pc.Vec2( i889[3], i889[4] )
  request.r(i889[5], i889[6], 0, i888, 'sprite')
  i888.id = i889[7]
  i888.x = i889[8]
  i888.y = i889[9]
  i888.width = i889[10]
  i888.height = i889[11]
  i888.xOffset = i889[12]
  i888.yOffset = i889[13]
  i888.xAdvance = i889[14]
  i888.scale = i889[15]
  return i888
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i894 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i895 = data
  i894.m_Name = i895[0]
  i894.m_HashCode = i895[1]
  i894.m_ElementType = i895[2]
  i894.m_Unicode = i895[3]
  i894.m_GlyphIndex = i895[4]
  i894.m_Scale = i895[5]
  return i894
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i898 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'sprite')
  i898.m_Index = i899[2]
  i898.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i899[3], i898.m_Metrics)
  i898.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i899[4], i898.m_GlyphRect)
  i898.m_Scale = i899[5]
  i898.m_AtlasIndex = i899[6]
  i898.m_ClassDefinitionType = i899[7]
  return i898
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i900 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i901 = data
  var i903 = i901[0]
  var i902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i903.length; i += 1) {
    i902.add(request.d('TMPro.TMP_Style', i903[i + 0]));
  }
  i900.m_StyleList = i902
  return i900
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.TMP_Style' )
  var i907 = data
  i906.m_Name = i907[0]
  i906.m_HashCode = i907[1]
  i906.m_OpeningDefinition = i907[2]
  i906.m_ClosingDefinition = i907[3]
  i906.m_OpeningTagArray = i907[4]
  i906.m_ClosingTagArray = i907[5]
  i906.m_OpeningTagUnicodeArray = i907[6]
  i906.m_ClosingTagUnicodeArray = i907[7]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i909 = data
  var i911 = i909[0]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i911[i + 0]) );
  }
  i908.files = i910
  i908.componentToPrefabIds = i909[1]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i915 = data
  i914.path = i915[0]
  request.r(i915[1], i915[2], 0, i914, 'unityObject')
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i917 = data
  var i919 = i917[0]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i919[i + 0]) );
  }
  i916.scriptsExecutionOrder = i918
  var i921 = i917[1]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i921[i + 0]) );
  }
  i916.sortingLayers = i920
  var i923 = i917[2]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i923[i + 0]) );
  }
  i916.cullingLayers = i922
  i916.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i917[3], i916.timeSettings)
  i916.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i917[4], i916.physicsSettings)
  i916.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i917[5], i916.physics2DSettings)
  i916.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i917[6], i916.qualitySettings)
  i916.enableRealtimeShadows = !!i917[7]
  i916.enableAutoInstancing = !!i917[8]
  i916.enableDynamicBatching = !!i917[9]
  i916.lightmapEncodingQuality = i917[10]
  i916.desiredColorSpace = i917[11]
  var i925 = i917[12]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( i925[i + 0] );
  }
  i916.allTags = i924
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i929 = data
  i928.name = i929[0]
  i928.value = i929[1]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i933 = data
  i932.id = i933[0]
  i932.name = i933[1]
  i932.value = i933[2]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i937 = data
  i936.id = i937[0]
  i936.name = i937[1]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i939 = data
  i938.fixedDeltaTime = i939[0]
  i938.maximumDeltaTime = i939[1]
  i938.timeScale = i939[2]
  i938.maximumParticleTimestep = i939[3]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i941 = data
  i940.gravity = new pc.Vec3( i941[0], i941[1], i941[2] )
  i940.defaultSolverIterations = i941[3]
  i940.bounceThreshold = i941[4]
  i940.autoSyncTransforms = !!i941[5]
  i940.autoSimulation = !!i941[6]
  var i943 = i941[7]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i943[i + 0]) );
  }
  i940.collisionMatrix = i942
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i947 = data
  i946.enabled = !!i947[0]
  i946.layerId = i947[1]
  i946.otherLayerId = i947[2]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'material')
  i948.gravity = new pc.Vec2( i949[2], i949[3] )
  i948.positionIterations = i949[4]
  i948.velocityIterations = i949[5]
  i948.velocityThreshold = i949[6]
  i948.maxLinearCorrection = i949[7]
  i948.maxAngularCorrection = i949[8]
  i948.maxTranslationSpeed = i949[9]
  i948.maxRotationSpeed = i949[10]
  i948.baumgarteScale = i949[11]
  i948.baumgarteTOIScale = i949[12]
  i948.timeToSleep = i949[13]
  i948.linearSleepTolerance = i949[14]
  i948.angularSleepTolerance = i949[15]
  i948.defaultContactOffset = i949[16]
  i948.autoSimulation = !!i949[17]
  i948.queriesHitTriggers = !!i949[18]
  i948.queriesStartInColliders = !!i949[19]
  i948.callbacksOnDisable = !!i949[20]
  i948.reuseCollisionCallbacks = !!i949[21]
  i948.autoSyncTransforms = !!i949[22]
  var i951 = i949[23]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i951[i + 0]) );
  }
  i948.collisionMatrix = i950
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i955 = data
  i954.enabled = !!i955[0]
  i954.layerId = i955[1]
  i954.otherLayerId = i955[2]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i957 = data
  var i959 = i957[0]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i959[i + 0]) );
  }
  i956.qualityLevels = i958
  var i961 = i957[1]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( i961[i + 0] );
  }
  i956.names = i960
  i956.shadows = i957[2]
  i956.anisotropicFiltering = i957[3]
  i956.antiAliasing = i957[4]
  i956.lodBias = i957[5]
  i956.shadowCascades = i957[6]
  i956.shadowDistance = i957[7]
  i956.shadowmaskMode = i957[8]
  i956.shadowProjection = i957[9]
  i956.shadowResolution = i957[10]
  i956.softParticles = !!i957[11]
  i956.softVegetation = !!i957[12]
  i956.activeColorSpace = i957[13]
  i956.desiredColorSpace = i957[14]
  i956.masterTextureLimit = i957[15]
  i956.maxQueuedFrames = i957[16]
  i956.particleRaycastBudget = i957[17]
  i956.pixelLightCount = i957[18]
  i956.realtimeReflectionProbes = !!i957[19]
  i956.shadowCascade2Split = i957[20]
  i956.shadowCascade4Split = new pc.Vec3( i957[21], i957[22], i957[23] )
  i956.streamingMipmapsActive = !!i957[24]
  i956.vSyncCount = i957[25]
  i956.asyncUploadBufferSize = i957[26]
  i956.asyncUploadTimeSlice = i957[27]
  i956.billboardsFaceCameraPosition = !!i957[28]
  i956.shadowNearPlaneOffset = i957[29]
  i956.streamingMipmapsMemoryBudget = i957[30]
  i956.maximumLODLevel = i957[31]
  i956.streamingMipmapsAddAllCameras = !!i957[32]
  i956.streamingMipmapsMaxLevelReduction = i957[33]
  i956.streamingMipmapsRenderersPerFrame = i957[34]
  i956.resolutionScalingFixedDPIFactor = i957[35]
  i956.streamingMipmapsMaxFileIORequests = i957[36]
  i956.currentQualityLevel = i957[37]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i967 = data
  i966.weight = i967[0]
  i966.vertices = i967[1]
  i966.normals = i967[2]
  i966.tangents = i967[3]
  return i966
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'm_ObjectArgument')
  i968.m_ObjectArgumentAssemblyTypeName = i969[2]
  i968.m_IntArgument = i969[3]
  i968.m_FloatArgument = i969[4]
  i968.m_StringArgument = i969[5]
  i968.m_BoolArgument = !!i969[6]
  return i968
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i971 = data
  i970.xPlacement = i971[0]
  i970.yPlacement = i971[1]
  i970.xAdvance = i971[2]
  i970.yAdvance = i971[3]
  return i970
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[64],"65":[12],"66":[11],"67":[11],"68":[11],"69":[11],"70":[11],"71":[11],"72":[11],"73":[74],"75":[74],"76":[74],"77":[74],"78":[74],"79":[74],"80":[74],"81":[74],"82":[74],"83":[74],"84":[74],"85":[74],"86":[74],"87":[12],"88":[5],"89":[90],"91":[90],"24":[23],"92":[23],"93":[23],"27":[24],"40":[28,23],"94":[23],"26":[24],"95":[23],"96":[23],"97":[23],"98":[23],"99":[23],"100":[23],"101":[23],"102":[23],"103":[23],"104":[28,23],"105":[23],"106":[23],"107":[23],"42":[23],"108":[28,23],"109":[23],"110":[111],"112":[111],"113":[111],"114":[111],"115":[12],"116":[12],"117":[23],"32":[5,23],"22":[23,28],"118":[23],"119":[28,23],"120":[5],"121":[28,23],"122":[23],"123":[124],"125":[124],"126":[124]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.CapsuleCollider","UnityEngine.MonoBehaviour","LGSDKLeaderCharacterController","UnityEngine.GameObject","UnityEngine.Rigidbody","UnityEngine.Camera","UnityEngine.AudioListener","LGSDKCameraFollow","UnityEngine.SphereCollider","LGSDKBullet","UnityEngine.Animation","LGSDKFlowerCharacterController","UnityEngine.BoxCollider","LGSDKLoot","LGSDKDamagePopup","TMPro.TextMeshProUGUI","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","LegoSDK.TimelineUpMechanic.LGSDKGameControllerExample","LegoTimelineUpMechanic.Gate.LGSDKSingleGateFireRateBehavior","TMPro.TextMeshPro","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSteelBarrel","LGSDK.TimelineUp.Obstacles.LGSDKObstacleIdleBehavior","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSaw","LGSDK.TimelineUp.Obstacles.LGSDKObstacleSawPatrolBehavior","LGSDK.TimelineUp.Obstacles.LGSDKObstacleRotatorBehavior","LGSDKEnemyShooter","LGSDKEnemyController","UnityEngine.UI.Image","LGSDKHealthBarFollow","UnityEngine.UI.Slider","UnityEngine.Sprite","LGSDKEnemyBullet","LegoTimelineUpMechanic.Gate.LGSDKSingleGateAtkRangeBehavior","UnityEngine.Light","UnityEngine.MeshCollider","TMPForceLoader","BoxHealth","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "LUNA";

Deserializers.lunaInitializationTime = "06/18/2025 03:39:45";

Deserializers.lunaDaysRunning = "6.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "FirstDemo";

Deserializers.lunaAppID = "30677";

Deserializers.projectId = "641b511435c2fd743a36236d8be72ef1";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1707";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4090";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.LUNA";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "81ae5f1a-ab56-4cf6-816f-c86f478436b3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["TMPForceLoader","LoadTMPSettings"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

