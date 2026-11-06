# Физика Chaos и производительность

## Изоляция внутренних коллизий

В Chaos Physics прикрепление твёрдых тел с пересекающимися коллизиями вызывает силы депенетрации («детали улетают»). PointSnap автоматически изолирует коллизии между всеми деталями внутри сборки через `IgnoreActorWhenMoving`, сохраняя коллизии с внешним миром.

## Настройки DefaultEngine.ini для 90 FPS в VR

```ini
r.ForwardShading=True
vr.InstancedStereo=True
r.DynamicGlobalIlluminationMethod=0
r.ReflectionMethod=0
r.Shadow.Virtual.Enable=0
r.RayTracing=False
r.AllowOcclusionQueries=True
```

> [!WARNING]
> Эти настройки отключают Lumen и Virtual Shadow Maps — применяйте только для VR-проектов.
