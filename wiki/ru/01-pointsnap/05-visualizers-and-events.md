# Визуализаторы и события

Для кастомной визуализации (режим `CustomOnly`) и реакции на сближение используйте события:

| Событие | Аргументы | Назначение |
| :--- | :--- | :--- |
| `OnSnapCandidateApproached` | `HeldSocket, TargetSocket` | Сокет вошёл в зону обнаружения |
| `OnSnapCandidateDeparted` | `HeldSocket, TargetSocket` | Сокет покинул зону обнаружения |
| `OnSnapCandidateProximityChanged` | `Distance, ProximityAlpha, Held, Target` | Непрерывно при сближении (`0.0..1.0`) |
| `OnSnapCandidateAvailabilityChanged` | `bIsAvailable, bCanSnap, Held, Target` | Готовность к защёлкиванию при отпускании |

## Ghost Preview и 3D-цилиндры

Режимы описаны в [USnapControllerComponent](./03-controller-component.md).

> [!NOTE]
> TODO: добавить примеры Blueprint-графов (подсветка по `ProximityAlpha`, звук защёлкивания).
