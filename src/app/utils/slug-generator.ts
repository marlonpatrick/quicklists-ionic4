import { ChecklistDataService } from '../checklist/shared/domain/checklist-data.service';

export class SlugGenerator {

    public static generate(checklistDataService: ChecklistDataService, title: string): string {

        // NOTE: This is a simplistic slug generator and will not handle things like special characters.
        let slug = title.toLowerCase().replace(/\s+/g, '-');

        // Check if the slug already exists
        const exists = checklistDataService.checklists.filter((checklist) => {
            return checklist.id.substring(0, slug.length) === slug;
        });

        // If the title is already being used, add a number to make the slug unique
        if (exists.length > 0) {
            slug = slug + exists.length.toString();
        }

        return slug;
    }
}
