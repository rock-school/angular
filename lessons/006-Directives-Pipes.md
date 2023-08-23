# Pipe

# Directive

## Components
## Attributes Directives


| COMMON DIRECTIVES | DETAILS                                 |
| ---- |-----------------------------------------|
| NgClass | Добавляет и удаляет набор классов CSS.  |
| NgStyle |           Добавляет и удаляет набор стилей HTML.                              | 
| NgModel |       Добавляет двустороннюю привязку данных к элементу формы HTML.                                  |

### NgClass

```html
<div [ngClass]="isSpecial ? 'special' : ''">This div is special</div>
```

```typescript
class Component {
    // CSS classes: added/removed per current state of component properties
    currentClasses =  {
        saveable: this.canSave,
        modified: !this.isUnchanged,
        special:  this.isSpecial
    };
}
```
```html
<div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special.</div>
<some-element [ngClass]="'first second'">...</some-element>

<some-element [ngClass]="['first', 'second']">...</some-element>

<some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>

<some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>

<some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
```

###  NgStyle 

```typescript
class Component {
    // CSS classes: added/removed per current state of component properties
    currentStyles = {
        'font-style':  this.canSave      ? 'italic' : 'normal',
        'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
        'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
}
```
```html
<some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
<div [ngStyle]="currentStyles">
    This div is initially italic, normal weight, and extra large (24px).
</div>
```

## Structural directives


| DIRECTIVES | DETAILS |
| ---- | --- |
| NgIf | Условно создает или удаляет подпредставления из шаблона. |
| NgFor| Повторите узел для каждого элемента списка.|
| NgSwitch	| Набор директив, которые переключают альтернативные представления. |


## Custom Directive
