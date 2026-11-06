# USnapAssemblyComponent

Компонент превращает набор деталей в готовое логическое устройство.

## Критерии завершения (ValidationMode)

| Режим | Условие |
| :--- | :--- |
| **AllSocketsOccupied** | Все сокеты конструкции заняты |
| **RequiredPartTags** | Присутствуют все Actor Tags из списка (`Battery`, `LeftWing`, `Engine`…) |
| **RequiredPartClasses** | В сборке есть указанные классы акторов |
| **Combined** | Комбинация всех условий выше |

## События сборки

- `OnAssemblyCompleted(AssemblyRoot, AssembledParts)` — устройство полностью готово.
- `OnAssemblyBroken(AssemblyRoot, RemovedPart)` — отсоединена любая ключевая деталь.
